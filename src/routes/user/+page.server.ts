import { dev } from '$app/environment';
import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { DEL_COOKIE_OPTIONS } from '$services/constants/cookie_options';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
// export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;

// export const load: PageServerLoad = async (props) => {
//     const { locals, cookies } = props;

//     console.clear();
//     console.log({ locals });

//     const token = cookies.get("token");
// }

export const actions: Actions = {
    logout: async (e) => {
        try {
            const { cookies, locals } = e;

            cookies.delete("token", DEL_COOKIE_OPTIONS);

            cookies.delete("current_user", DEL_COOKIE_OPTIONS);

            locals.current_user = null;

            return {
                data: null,
                status: 200,
                message: "LOGOUT"
            }
        } catch (error) {
            return {
                message: "AN_ERROR_OCCURED",
                status: 500,
                data: null,
            }
        }
    }
};
