// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { LINK_DATA } from "../services/constants/dummydata";
import { custom_logger } from "../services/functions/utils";
import { URLS } from "../backend/db/urls";
import type { PageLoad } from "./$types";
import { USERS } from "../backend/db/users";

export const load: PageLoad = async (props) => {
    const { params, cookies } = props;

    const token = cookies.get("token");

    // custom_logger("props", props);

    custom_logger("token", token);

    // const currentUser = USERS.find({})

    const urlData = await URLS.find({}).toArray();

    console.log({ urlData })

    const url = `https://jsonplaceholder.typicode.com/users`
    const userData = await fetch(url).then(res => res.json());

    return {
        message: "Hello Svelte",
        params,
        LINK_DATA,
        userData
    }
}
