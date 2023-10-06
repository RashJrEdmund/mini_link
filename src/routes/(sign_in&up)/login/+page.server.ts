import { loginWithEmailPassword } from "$backend/client";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async (e) => {
        const { request, cookies, locals } = e;

        const data = await request.formData();
        const email = data.get("email") as string;
        const password = data.get("password") as string;

        if (!email || !password) return {
            message: "Missing form fields",
            email: email ?? "",
            status: 401,
        };

        const res = await loginWithEmailPassword({ email, password });

        if (!res.data) return {
            message: "Incorrect email or password",
            status: 404,
        };

        const { data: { user, token } } = res;

        console.log({ token, user })

        cookies.set("token", token, { path: "/" });
        locals.current_user = user;

        return {
            message: `welcome back ${user.username || user.email}`,
            status: 200,
            current_user: user,
        };
    },
};
