import type { LINK_OBJ, USER, VISITOR_OBJ } from "$services/types";
import { error } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "./REQ_ERROR";
import { MIN_VISITOR_CHANCES } from "./constants";

type CREATE_FROM_BODY = (body: any, options: {
    _type: "USER" | "URL" | "VISITOR",
    _strict?: boolean, // strict mode is recomended for when creating. and not editting
}) => {
    status: number,
    new_user?: USER,
    new_url?: LINK_OBJ,
    new_visitor?: VISITOR_OBJ
};

export const createFromBody: CREATE_FROM_BODY = (body, options) => {
    if (options._type === "USER") {
        const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("USER");

        if (options._strict) { // strict mode is good for creation
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

        const accepted_user_keys: (keyof USER)[] = ["_id", "username", "email", "profile_pic", "is_premium_user", "createdAt", "updatedAt", "password"];

        let new_user: any = {};

        for (const key in body) {
            if (accepted_user_keys.includes(key)) new_user = { ...new_user, [key]: body[key] };
            else throw error(401, {
                message: ERR_MESSAGE.UNRECOGNIZED_FIELD(key),
            });
        }

        return { status: 200, new_user };
    }

    if (options._type === "VISITOR") {
        const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("VISITOR");

        if (options._strict) { // strict mode is good for creation
            if (!body.visitor_id) throw error(401, {
                message: ERR_MESSAGE.MISSING_DETAILS()
            });

            const new_visitor: VISITOR_OBJ = {
                visitor_id: body.visitor_id,
                user_id: "",
                links: body.links || [],
                chances: MIN_VISITOR_CHANCES,
                createdAt: body?.createdAt ?? new Date().toDateString(),
            }

            return { status: 200, new_visitor };
        }

        const accepted_visitor_keys: (keyof VISITOR_OBJ)[] = ["_id", "chances", "visitor_id", "user_id", "links", "createdAt", "updatedAt"];

        let new_visitor: any = {};

        for (const key in body) {
            if (accepted_visitor_keys.includes(key)) new_visitor = { ...new_visitor, [key]: body[key] };
            else throw error(401, {
                message: ERR_MESSAGE.UNRECOGNIZED_FIELD(key),
            });
        }

        return { status: 200, new_visitor };
    }

    if (options._type === "URL") {
        const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("URL");

        if (options._strict) { // strict mode is good for creation
            if (!((body.user_id || body.visitor_id) && body.original)) throw error(401, {
                message: ERR_MESSAGE.MISSING_DETAILS()
            });

            const new_url: LINK_OBJ = {
                user_id: body.user_id || "",
                visitor_id: body.visitor_id || "",
                original: body.original, // short_link generated in URL_SERVICE.createUrl(url)
                clicks: body.clicks ?? 0,
                status: body.status ?? "Active",
                alias: body.alias ?? "",
            }

            return { status: 200, new_url };
        }

        const accepted_url_keys: (keyof LINK_OBJ)[] = ["user_id", "visitor_id", "short_link", "original", "clicks", "status", "alias"];

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
