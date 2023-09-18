// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// import { LINK_DATA } from "../services/constants/dummydata";

import { custom_logger } from "../services/functions/utils";
import type { PageLoad } from "./$types";
import USER_SERVICE from "../backend/modules/user/user.service";

export const load: PageLoad = async (props) => {
    const { params, cookies } = props;

    const token = cookies.get("token");

    console.log({ all: cookies.getAll() })

    // custom_logger("props", props);

    custom_logger("token", token);

    // const currentUser = USERS.find({})
    const _id = "97631e7e-a50b-4248-a7oo-oa8b5dce3b52"

    const userUrls = await USER_SERVICE.getUserUrls(_id);

    const url = `https://jsonplaceholder.typicode.com/users`
    const userData = await fetch(url).then(res => res.json());

    return {
        message: "Hello Svelte",
        params,
        LINK_DATA: userUrls,
        userData
    }
}
