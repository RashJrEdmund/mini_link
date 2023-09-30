import { getCurrentUser } from "$backend/client";
import { custom_logger } from "$services/functions/utils";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (props) => {
    return {
        current_user: "rash"
    }
    const { cookies, locals } = props;

    const token = cookies.get("token");

    const res = await getCurrentUser(token); // TODO: take off the .slice

    if (res.data) locals.current_user = res.data;

    custom_logger("current_user", { res, locals }, { clear: false });

    return {
        current_user: { ...res.data, token },
    }
}
