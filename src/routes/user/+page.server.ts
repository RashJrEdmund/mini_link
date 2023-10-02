import { dev } from '$app/environment';
import type { PageServerLoad } from '../$types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export const load: PageServerLoad = async (props) => {
    const { locals, cookies } = props;

    console.clear();
    console.log({ locals });

    const token = cookies.get("token");

    console.log("this locals", { token })
}