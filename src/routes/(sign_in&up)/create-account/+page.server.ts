import { createUsers } from "$backend/client";
import { validateEmail } from "$services/functions/validation";
import type { Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async (e) => {
        const { request, cookies, locals } = e;

        const data = await request.formData();
        const username = data.get("username") as string;
        const email = data.get("email") as string;
        const password = data.get("password") as string;
        const confirm_password = data.get("confirm_password") as string;

        if (password !== confirm_password) return {
            message: "Passwords don't match",
            username: username ?? "",
            email: email ?? "",
            status: 401,
        };

        if (!email || !password) return {
            message: "Missing email or password",
            username: username ?? "",
            email: email ?? "",
            status: 409,
        };

        if (!validateEmail(email)) return {
            message: "Invalid Email",
            username: username ?? "",
            email: email ?? "",
            status: 409,
        };

        const res = await createUsers({
            email,
            password,
            username,
            is_premium_user: false,
            profile_pic: ""
        });

        if (!res.data) return {
            message: res.message ?? "An error occured, please try again",
        }

        const { token, data: { user } } = res;

        cookies.set("token", token, { path: "/" });
        locals.current_user = user;

        return {
            message: "Account Created",
            status: 200,
            current_user: res.data
        }
    },
};
