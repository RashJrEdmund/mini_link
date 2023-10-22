import { stringifyData } from "$backend/utils/utils";
import { createHeaders } from "$backend/httpclient/headers";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import { createFromBody } from "$backend/utils/functions";
import USER_SERVICE from "../user/user.service";
import AUTH_SERVICE from "./auth.service";
import { error, type RequestHandler } from "@sveltejs/kit";
import { SET_COOKIE_OPTIONS } from "$services/constants/cookie_options";

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

            cookies.set("token", user_and_token.token, SET_COOKIE_OPTIONS); // setting the token to cookies

            return new Response(stringifyData(user_and_token), {
                headers: createHeaders(),
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: 500,
            });
        }
    }

    static LOGIN: RequestHandler = async (e) => {
        const body = await e.request.json();

        const { cookies } = e;
        const accumulator: any = {};
        accumulator.body = body;

        if (!body) throw error(404, {
            message: ERR_MESSAGE.MISSING_DETAILS(),
        });

        try {
            const { status, new_user: user } = createFromBody(body, { _type: "USER", _strict: false }); // strict mode is recomended for creation
            accumulator.createFromBody = { status, new_user: user }

            console.log({status, user})
            if (status !== 200 || !user?.email || !user?.password) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const user_and_token = await AUTH_SERVICE.loginWithEmailPassword(user.email, user.password);
            accumulator.user_and_token

            cookies.set("token", user_and_token.token, SET_COOKIE_OPTIONS); // setting the token to cookies

            return new Response(stringifyData({...user_and_token, accumulator}), {
                headers: createHeaders(),
            });
        } catch (er: any) {
            throw error(er?.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                accumulator,
                status: 500,
            });
        }
    }

    static CURRENT_USER: RequestHandler = async ({ request: { headers } }) => {
        const authoraztion = headers.get("Authorization");

        const token = authoraztion?.split(" ").pop();
        
        console.log("headaers", headers)

        try {
            if (!token) throw error(401, {
                message: REQ_NOT_FOUND_ERROS.MISSING_TOKEN(),
            });

            const bearer = await AUTH_SERVICE.verifyUserToken(token);

            if (!bearer) throw error(401, {
                message: REQ_NOT_FOUND_ERROS.BEAER_NOT_FOUND(),
            });

            return new Response(stringifyData({ user: bearer }), {
                headers: createHeaders(),
            });
        } catch (er: any) {
            throw error(er?.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: 500,
            });
        }
    }
}
