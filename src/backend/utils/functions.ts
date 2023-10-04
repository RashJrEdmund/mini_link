import type { LINK_OBJ, USER } from "$services/types";
import { error } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "./REQ_ERROR";

type CREATE_FROM_BODY = (body: any, options: {
    _type: "USER" | "URL",
    _strict?: boolean, // strict mode is recomended for when creating. and not editting
}) => {
    status: number,
    new_user?: USER,
    new_url?: LINK_OBJ
};

export const createFromBody: CREATE_FROM_BODY = (body, options) => {
    if (options._type === "USER") {
        const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("USER");

        if (options._strict) {
            if (!(body.username && body.email && body.password)) throw error(401, {
                message: ERR_MESSAGE.MISSING_DETAILS()
            });

            const new_user: USER = {
                username: body.username,
                email: body.email,
                profile_pic: "",
                password: body.password,
                is_premium_user: false,
                createdAt: body?.createdAt ?? new Date().toDateString(),
            }

            return { status: 200, new_user };
        }

        const accepted_user_keys = ["_id", "username", "email", "profile_pic", "is_premium_user", "createdAt", "updatedAt", "password"];

        let new_user: any = {};

        for (const key in body) {
            if (accepted_user_keys.includes(key)) new_user = { ...new_user, [key]: body[key] };
            else throw error(401, {
                message: ERR_MESSAGE.UNRECOGNIZED_FIELD(key),
            });
        }

        return { status: 200, new_user };
    }

    if (options._type === "URL") {
        const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("URL");

        if (options._strict) {
            if (!(body.user_id && body.original)) throw error(401, {
                message: ERR_MESSAGE.MISSING_DETAILS()
            });

            const new_url: LINK_OBJ = {
                user_id: body.user_id,
                original: body.original, // short_link generated in URL_SERVICE.createUrl(url)
                clicks: body.clicks ?? 0,
                status: body.status ?? "Active",
                alias: body.alias ?? "",
            }

            return { status: 200, new_url };
        }

        const accepted_url_keys = ["user_id", "short_link", "original", "clicks", "status", "alias"];

        let new_url: any = {};

        for (const key in body) {
            if (accepted_url_keys.includes(key)) new_url = { ...new_url, [key]: body[key] };
            else throw error(401, {
                message: ERR_MESSAGE.UNRECOGNIZED_FIELD(key),
            });
        }

        return { status: 200, new_url };
    }

    return error(401, {
        message: new REQ_NOT_FOUND_ERROS("USER").UNRECOGNIZED_ENTITY(),
    });
}
