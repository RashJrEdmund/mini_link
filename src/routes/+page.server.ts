import { createUrl, deleteUrl, getOneAndCurrentVisitor, registerVisitor, updateUrl } from "$backend/client";
import { SET_COOKIE_OPTIONS } from "$services/constants/cookie_options";
import { custom_logger } from "$services/functions/utils";
import { validateUrl } from "$services/functions/validation";
import type { LINK_OBJ, USER, VISITOR_OBJ } from "$services/types";
import type { Actions } from "@sveltejs/kit";

// import type { PageServerLoad } from "./$types"

// export const load: PageServerLoad = async (props) => {
//     const { cookies, locals } = props;

//     return {
//         somedata: "somedata in apge"
//     }
// }

export const actions: Actions = {
    newLink: async ({ request, cookies }) => {
        const data = await request.formData();
        const input_val = data.get("input_val") as string;

        const visitor_data = JSON.parse(data.get("visitor_data") as string);

        const current_user: USER | null = JSON.parse(cookies.get("current_user") || "null");

        if (!input_val) return {
            message: "STARE",
            data: null,
            status: 401,
        };

        if (!validateUrl(input_val)) return {
            message: "NOT_A_VALID_URL",
            data: null,
            status: 409,
        };

        if (current_user) {
            const newLink: LINK_OBJ = {
                user_id: current_user._id || "",
                visitor_id: "",
                original: input_val, // short_link generated in the backend
                clicks: 0,
                status: "Active",
                alias: "",
                createdAt: new Date().toDateString(),
            };

            const res = await createUrl(newLink);

            return {
                message: "NEW_LINK_ADDED",
                data: res.data,
                status: 200
            }
        }

        // NO USER SECTION. WILL CHECK FOR VISITORS AND ALL

        let visitor = JSON.parse(cookies.get("visitor") || "null");

        if (visitor && +visitor.chances <= 0) {
            return {
                message: "OUT_OF_CHANCES",
                data: null,
                status: 401,
            };
        }

        if (!visitor) {
            const { data } = await getOneAndCurrentVisitor(visitor_data.visitorId);

            visitor = data;
        }

        let visitor_id;

        if (visitor && visitor.visitor_id === visitor_data.visitorId) {
            visitor_id = visitor.visitor_id;
        }
        else {
            visitor_id = visitor_data.visitorId;

            const _new_visitor: VISITOR_OBJ = { // the rest of the object created in the from body function
                links: [], // this is going to 
                visitor_id, // from fingerprintjs
                user_id: null, // just incase.
                createdAt: new Date().toDateString()
            }

            const vis_res = await registerVisitor(_new_visitor);

            cookies.set("visitor", JSON.stringify(vis_res.data), SET_COOKIE_OPTIONS);

            cookies.set("visitor_id", visitor_id, { path: "/", httpOnly: true, secure: false });
        }

        const newLink: LINK_OBJ = {
            user_id: "",
            visitor_id,
            original: input_val, // short_link generated in the backend
            clicks: 0,
            status: "Active",
            alias: "",
            createdAt: new Date().toDateString(),
        };

        const res = await createUrl(newLink);

        return {
            message: "NEW_LINK_ADDED",
            data: res.data,
            status: res.status
        }
    },

    edit_url: async ({ request }) => {
        const data = await request.formData();
        const url_id = data.get("url_id") as string;

        const new_alias = data.get("alias") as string;

        const res = await updateUrl(url_id, { alias: new_alias });

        custom_logger("edit done", res);

        return {
            message: "EDIT_COMPLETED",
            data: res.data,
            status: res.status,
        };
    },

    delete_url: async ({ request }) => {
        const data = await request.formData();
        const url_id = data.get("url_id") as string;

        const res = await deleteUrl(url_id);

        custom_logger("DELTE RESPONSE", res);

        return {
            message: "URL_DELETED",
            data: res.data,
            status: res.status,
        };
    },
}
