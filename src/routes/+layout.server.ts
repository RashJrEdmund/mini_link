import { getCurrentUser, getUserUrls } from "$backend/client";
import { custom_logger } from "$services/functions/utils";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (props) => {
    const { cookies, locals } = props;

    console.log("CURRENT_LOCAL USER", locals)
    if (locals.current_user) {
        const user_urls = await getUserUrls(locals.current_user._id);

        return {
            current_user: { ...locals.current_user, status: 200 },
            user_urls: user_urls.data,
        }
    }

    const token = cookies.get("token") ?? "";
    console.log("CURRENT_LOCAL USER", locals, { token });

    const res = await getCurrentUser(token); // TODO: take off the .slice

    if (res.data) {
        locals.current_user = res.data;
        const user_urls = await getUserUrls(res.data._id as string);

        custom_logger("current_user", { user_urls, locals }, { clear: false });

        return {
            current_user: { ...res.data, status: 200, token },
            user_urls: user_urls.data
        }
    }

    return {
        current_user: null,
        user_urls: null,
    }
}
