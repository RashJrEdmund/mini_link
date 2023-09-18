import { fail } from "@sveltejs/kit";

export const actions = {
    default: async (e) => {
        const { request, cookies } = e;

        const data = await request.formData();
        const email = data.get("email");
        const password = data.get("password");

        console.log(" \n \n ===== DATA ===== \n", data);

        if (!email || !password) return fail(401, {
            message: "Missing form fields",
            email: email ?? "",
        });


        cookies.set("token", crypto.randomUUID(), { path: "/" });

        return { message: "Logged in", status: 200 }
    },
};
