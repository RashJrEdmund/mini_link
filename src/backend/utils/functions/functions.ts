import type { LINK_OBJ, USER } from "$services/types";
import { error } from "@sveltejs/kit";

type CREATE_FROM_BODY = (body: any, _type: "USER" | "URL") => {
    status: number,
    new_user?: USER,
    new_url?: LINK_OBJ
};

export const createFromBody: CREATE_FROM_BODY = (body, _type) => {
    if (_type === "USER") {
        if (!(body._id && body.username && body.email && body.profile_pic && typeof body.is_premium_user)) throw new Error("MISSING_USER_DETAILS");

        const new_user: USER = {
            _id: body._id,
            username: body.username,
            email: body.email,
            profile_pic: body.profile_pic,
            is_premium_user: false,
        }

        return { status: 200, new_user };
    }

    if (_type === "URL") {
        if (!(body._id && body.user_id && body.short_link && body.original && typeof body.is_premium_user)) throw new Error("MISSING_URL_DETAILS");

        const new_url: LINK_OBJ = {
            _id: body._id,
            user_id: body.user_id,
            short_link: body.short_link,
            original: body.original,
            clicks: 0,
            status: "Active",
            alias: "",
        }

        return { status: 200, new_url };
    }

    return error(401, {
        message: "UNRECOGNIZED_TYPE"
    });
}
