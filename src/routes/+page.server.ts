// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// import { LINK_DATA } from "$services/constants/dummydata";

import { custom_logger } from "$services/functions/utils";
import type { PageLoad } from "./user/$types";

export const load: PageLoad = async (props) => {
    const { params, cookies } = props;

    const token = cookies.get("token");

    console.log({ all_cookies: cookies.getAll() });

    // custom_logger("props", props);

    custom_logger("token", token);

    const _id = "650c4619f98113df72f95316";

    const userUrls = await fetch(`http://localhost:5173/api/urls/${_id}`).then(res => res.json());

    const url = `http://localhost:5173/api/users/${_id}` || `https://jsonplaceholder.typicode.com/users`;

    const userData = await fetch(url).then(res => res.json());

    return {
        message: "Hello Svelte",
        params,
        LINK_DATA: userUrls,
        userData
    }
}
