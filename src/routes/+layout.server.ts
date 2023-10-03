import { getCurrentUser, getUserUrls } from "$backend/client";
import { custom_logger } from "$services/functions/utils";
import type { Action } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (props) => {
    const { cookies, locals } = props;
    const arr_themes = ["dark", "light"];

    const theme = arr_themes.includes(cookies.get("theme")) ? cookies.get("theme") : "light";

    // console.log("CURRENT_LOCAL USER", locals)
    if (locals.current_user) {
        const user_urls = await getUserUrls(locals.current_user._id);

        return {
            current_user: { ...locals.current_user, "first_if": true },
            user_urls: user_urls.data,
            status: 200,
            theme
        }
    }

    const token = cookies.get("token") ?? "";
    // console.log("CURRENT_LOCAL USER", locals, { token, theme });

    const res = await getCurrentUser(token); // TODO: take off the .slice

    if (res.data) {
        locals.current_user = res.data;
        const user_urls = await getUserUrls(res.data._id as string);

        custom_logger("current_user", { user_urls, locals }, { clear: false });

        return {
            current_user: { ...res.data, "second_if": true },
            user_urls: user_urls.data,
            status: 200,
            theme,
            token
        }
    }

    return {
        current_user: null,
        user_urls: null,
        theme
    }
}
