// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { getOneUser, getUserUrls } from "$backend/client";
import { custom_logger } from "$services/functions/utils";
import type { PageLoad } from "./user/$types";

export const load: PageLoad = async (props) => {
    const { params, cookies } = props;

    const _id = "650c4619f98113df72f95316";

    const userUrls = await getUserUrls(_id);

    const userData = await getOneUser(_id);

    return {
        message: "Hello Svelte",
        params,
        LINK_DATA: userUrls,
        userData
    }
}
