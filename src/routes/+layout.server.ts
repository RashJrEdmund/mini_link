import { getCurrentUser, getOneAndCurrentVisitor, getUserUrls } from "$backend/client";
import { arr_themes } from "$services/constants/theme_data.server";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (props) => {
    const { cookies, locals } = props;

    const theme = arr_themes.includes(cookies.get("theme")) ? cookies.get("theme") : "light";

    if (locals.current_user) {
        const user_urls = await getUserUrls(locals.current_user._id);

        return {
            current_user: { ...locals.current_user, "first_if": true },
            user_urls: user_urls.data,
            visitor: null,
            status: 200,
            theme
        }
    }

    const token = cookies.get("token") ?? "";

    const { data: userData } = await getCurrentUser(token); // TODO: take off the .slice

    if (userData) {
        locals.current_user = userData.user;
        const user_urls = await getUserUrls(userData.user._id as string);

        return {
            current_user: { ...userData.user, "second_if": true },
            user_urls: user_urls.data,
            status: 200,
            visitor: null,
            theme,
            token
        }
    }

    const visitor_id = cookies.get("visitor_id") ?? "";

    const { data: visitorData } = await getOneAndCurrentVisitor(visitor_id);

    // console.log("this visitor_id", { visitor_id, visitorData });

    if (visitorData) {
        locals.visitor = visitorData;

        return {
            current_user: null,
            user_urls: null,
            theme,
            visitor: visitorData,
        }
    }

    return {
        current_user: null,
        user_urls: null,
        visitor: null,
        theme
    }
}
