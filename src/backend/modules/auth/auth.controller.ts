import { stringify, headers, clearAllCookies } from "$backend/utils/utils";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import { error } from "console";
import { createFromBody } from "$backend/utils/functions";
import USER_SERVICE from "../user/user.service";
import AUTH_SERVICE from "./auth.service";
import type { RequestHandler } from "@sveltejs/kit";
import { custom_logger } from "$services/functions/utils";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("USER");

export class AUTH_CONTROLLER {
    static CREATE_USER_ACCOUNT: RequestHandler = async (e) => {
        const body = await e.request.json();

        const { cookies } = e

        if (!body) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const { status, new_user } = createFromBody(body, { _type: "USER", _strict: true }); // strict mode is recomended for creation

            if (status !== 200 || !new_user) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const user = await USER_SERVICE.createUser(new_user);

            if (!user) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            const user_and_token = AUTH_SERVICE.signUserToken(user);

            cookies.set("token", user_and_token.token, { path: "/", secure: true }); // setting the token to cookies

            return new Response(stringify(user_and_token), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static LOGIN: RequestHandler = async (e) => {
        const body = await e.request.json();

        const { cookies } = e

        if (!body) throw error(404, {
            message: ERR_MESSAGE.MISSING_DETAILS(),
        });

        try {
            const { status, new_user: { email, password } } = createFromBody(body, { _type: "USER", _strict: false }); // strict mode is recomended for creation

            if (status !== 200 || !email || !password) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const user_and_token = await AUTH_SERVICE.loginWithEmailPassword(email, password);

            cookies.set("token", user_and_token.token, { path: "/" }); // setting the token to cookies

            return new Response(stringify(user_and_token), {
                headers
            });
        } catch (er: any) {
            throw error(er?.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static CURRENT_USER: RequestHandler = async ({ cookies }) => {
        const token = cookies.get("token");

        console.log({ token, type: typeof token });

        try {
            if (!token) throw error(REQ_NOT_FOUND_ERROS.MISSING_TOKEN(), {
                status: 401
            });

            const bearer = await AUTH_SERVICE.verifyUserToken(token);

            if (!bearer) throw error(REQ_NOT_FOUND_ERROS.BEAER_NOT_FOUND(), {
                status: 401
            });

            custom_logger("bearer", bearer, { clear: true });

            return new Response(stringify(bearer), {
                headers
            });
        } catch (er: any) {
            throw error(er?.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                er
            });
        }
    }
}
