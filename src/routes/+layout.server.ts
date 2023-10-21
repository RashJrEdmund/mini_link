import { getCurrentUser, getOneAndCurrentVisitor, getUserUrls } from "$backend/client";
import { DEL_COOKIE_OPTIONS, SET_COOKIE_OPTIONS } from "$services/constants/cookie_options";
import { arr_themes } from "$services/constants/theme_data.server";
import { custom_logger } from "$services/functions/utils";
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async (props) => {
    try {
        const { cookies, locals } = props;

        const theme = arr_themes.includes(cookies.get("theme")) ? cookies.get("theme") : "light";

        const token = cookies.get("token") ?? "";

        const { data: userData } = await getCurrentUser(token); // TODO: take off the .slice

        if (userData) {
            locals.current_user = userData.user;
            const user_urls = await getUserUrls(userData.user._id as string);

            cookies.set("current_user", JSON.stringify(userData.user), SET_COOKIE_OPTIONS);

            return {
                current_user: { ...userData.user },
                user_urls: user_urls.data,
                status: 200,
                visitor: null,
                theme,
                token
            }
        } else {
            cookies.delete("current_user", DEL_COOKIE_OPTIONS); // meaning current user token has expired. cookie needs to be cleared
        }

        const visitor_id = cookies.get("visitor_id") || "_";

        const { data: visitorData } = await getOneAndCurrentVisitor(visitor_id);

        if (visitorData) {
            locals.visitor = visitorData;

            cookies.set("visitor", JSON.stringify(visitorData), SET_COOKIE_OPTIONS);

            return {
                current_user: null,
                user_urls: null,
                theme,
                visitor: visitorData,
            }
        } else {
            cookies.delete("visitor_id");
            cookies.delete("visitor", DEL_COOKIE_OPTIONS);
        }

        custom_logger("NO VISITOR ID NOR USER TOKEN DETECTED", null);

        return {
            current_user: null,
            user_urls: null,
            visitor: null,
            theme
        }
    } catch {
        return {
            message: "AN_ERROR_OCCURED",
            status: 500,
            data: null
        }
    }
}
