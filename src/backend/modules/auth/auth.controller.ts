import { stringify, headers } from "$backend/utils/utils";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import { error } from "console";
import { createFromBody } from "$backend/utils/functions";
import type { RequestHandler } from "@sveltejs/kit";
import USER_SERVICE from "../user/user.service";
import AUTH_SERVICE from "./auth.service";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("USER");

export class AUTH_CONTROLLER {
    static CREATE_USER_ACCOUNT: RequestHandler = async (e) => {
        const body = await e.request.json();

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

        // return new Response(stringify(body), {
        //     headers
        // });

        if (!body) throw error(404, {
            message: ERR_MESSAGE.MISSING_DETAILS(),
        });

        try {
            const { status, new_user: { email, password } } = createFromBody(body, { _type: "USER", _strict: false }); // strict mode is recomended for creation

            if (status !== 200 || !email || !password) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const user_and_token = await AUTH_SERVICE.loginWithEmailPassword(email, password);

            return new Response(stringify(user_and_token), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static CURRENT_USER: RequestHandler = async (e) => {
        // const body = await e.request.json();

        return new Response("getting current user... ", {
            headers
        });

        // if (!body) throw error(404, {
        //     message: ERR_MESSAGE.NOT_FOUND(),
        // });

        // try {
        //     const { status, new_user } = createFromBody(body, { _type: "USER", _strict: true }); // strict mode is recomended for creation

        //     if (status !== 200 || !new_user) throw error(404, {
        //         message: ERR_MESSAGE.MISSING_DETAILS(),
        //     });

        //     const user = await USER_SERVICE.createUser(new_user);

        //     return new Response(stringify(user), {
        //         headers
        //     });
        // } catch (er: any) {
        //     throw error(er.status ?? 500, {
        //         message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
        //     });
        // }
    }
}
