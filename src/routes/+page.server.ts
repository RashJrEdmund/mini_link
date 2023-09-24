// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { getCurrentUser, getOneUser, getUserUrls } from "$backend/client";
import { custom_logger } from "$services/functions/utils";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (props) => {
    const { params, cookies, locals } = props;

    const token = cookies.get("token");

    const _id = "650c4619f98113df72f95316";

    const cks = cookies.getAll();

    console.log({ locals });

    const userUrls = await getUserUrls(_id);

    const userData = await getOneUser(_id);

    // if (!token) throw redirect(300, "/login");

    // const currentUser = await getCurrentUser(token);

    // if (currentUser.email) locals.currentUser = currentUser;
    // else throw redirect(300, "/login");

    return {
        message: "Hello Svelte",
        params,
        LINK_DATA: userUrls,
        userData,
        cks,
        // currentUser
    }
}
