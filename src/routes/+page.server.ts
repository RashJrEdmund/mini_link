import { custom_logger } from "$services/functions/utils";
import { validateUrl } from "$services/functions/validation";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    newLink: async ({ request, cookies, locals }) => {
        const data = await request.formData();
        const input_val = data.get("input_val") as string;

        const visitor_data = JSON.parse(data.get("visitor_data") as string);

        const current_user = locals.current_user;

        // if (!input_val) return {
        //     message: "STARE",
        //     data: null,
        //     status: 401,
        // };

        // if (!validateUrl(input_val)) return {
        //     message: "NOT_A_VALID_URL",
        //     data: null,
        //     status: 409,
        // };

        custom_logger("current_user", current_user);
        custom_logger("visitor_data", visitor_data)
    }
}


/* 
const hanldeSubmit = async (e) => {
        const formEl = e.target as HTMLFormElement;

        const my_toaster = new TOAST_SERVICE(toast);

        if (!input_val.trim()) return my_toaster.STARE(); // 👀

        if (!validateUrl(input_val)) {
            input_val = "";
            return my_toaster.NOT_A_VALID_URL();
        }

        const user_id = getUserOrAgentId(current_user);

        console.log("input_val validation", validateUrl(input_val));

        const newLink: LINK_OBJ = {
            user_id,
            original: input_val, // short_link generated in the backend
            clicks: 0,
            status: "Active",
            alias: "",
            createdAt: new Date().toDateString(),
        };

        fetch(formEl.action, {
            method: "POST",
            body: JSON.stringify(newLink)
        }).then(_ => _.json())
            .then(({ data }) => {
                LINK_STORE.update((currentData) => getUniqueArray(currentData, data));
                my_toaster.NEW_LINK_ADDED();
                temp_link = data;
            })
            .catch(() => my_toaster.AN_ERROR_OCCURE());

        input_val = "";
    };
*/
