import { BCRYPT } from "$backend/utils/validation";
import { stringify, headers } from "$backend/utils/utils";
import { custom_logger } from "$services/functions/utils";
import { json, type RequestHandler } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import USER_SERVICE from "./user.service";
import { error } from "console";
import { createFromBody } from "$backend/utils/functions";

custom_logger("BCRYPT", BCRYPT);

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("USER");
export default class USER_CONTROLLER {
    static GET_ALL_USERS: RequestHandler = async () => {
        try {
            const users = await USER_SERVICE.getAllUsers();

            if (!users) throw error(404, {
                message: ERR_MESSAGE.NONE_FOUND(),
            });

            return json(users, {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static GET_ONE_USER: RequestHandler = async (e) => {
        const { params: { _id } } = e;

        if (!_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const user = await USER_SERVICE.getById(_id);

            if (!user) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            return new Response(stringify(user), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static CREATE_USER: RequestHandler = async (e) => {
        const body = await e.request.json();

        if (!body) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const { status, new_user } = createFromBody(body, { _type: "USER", _strict: true }); // strict mode is recomended for creation
            custom_logger("new user found", new_user, { clear: true })

            if (status !== 200 || !new_user) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const user = await USER_SERVICE.createUser(new_user);

            return new Response(stringify(user), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static EDIT_USER: RequestHandler = async (req) => {
        const body = await req.request.json();

        const { params: { _id } } = req;

        try {
            const { status, new_user: prev_user } = createFromBody(body, { _type: "USER", _strict: false });

            if (!_id || status !== 200 || !prev_user) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const update_user = await USER_SERVICE.editUser(_id, prev_user);

            if (!update_user) throw error(500, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            return new Response(stringify(update_user), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static DELETE_USER: RequestHandler = async (req) => {
        const { params: { _id } } = req;

        if (!_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const res = await USER_SERVICE.delete(_id);

            if (!res) return json(
                {
                    message: `USER_ID: ${_id} NOT FOUND`
                },
                {
                    status: 404,
                    headers
                }
            );

            return json(
                {
                    message: `USER: ${res.username ?? _id} SUCCESFULLY DELETED`
                },
                {
                    status: 404,
                    headers
                }
            );
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }
}
