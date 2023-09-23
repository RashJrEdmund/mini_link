import { fail, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
    default: async (e) => {
        const { request, cookies } = e;

        const data = await request.formData();
        const username = data.get("username");
        const email = data.get("email");
        const password = data.get("password");
        const confirm_password = data.get("confirm_password");

        if (password !== confirm_password) return fail(401, {
            message: "Passwords don't match",
            username: username ?? "",
            email: email ?? "",
        });

        if (!email || !password) return fail(409, { // conflic
            message: "Missing email or password",
            username: username ?? "",
            email: email ?? "",
        });

        cookies.set("token", crypto.randomUUID(), { path: "/" });
        return { message: "Logged in" };
    },
};
