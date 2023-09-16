// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

import { LINK_DATA } from "../services/constants/dummydata"
import type { PageLoad } from "./$types"

export const load: PageLoad = async ({ params }) => {
    const url = `https://jsonplaceholder.typicode.com/users`
    const userData = await fetch(url).then(res => res.json());

    console.log("userData", userData)

    return {
        message: "Hello Svelte",
        params,
        LINK_DATA,
        userData
    }
}
