import { createUsers } from "$backend/client";
import { fail, type Actions, redirect } from "@sveltejs/kit";

const longActualToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNDYxOWY5ODExM2RmNzJmOTUzMTYiLCJ1c2VybmFtZSI6Im9yYXNodXMiLCJlbWFpbCI6Im9yYXNodXNlZG11bmRAZ21haWwuY29tIiwicHJvZmlsZV9waWMiOiIiLCJpc19wcmVtaXVtX3VzZXIiOmZhbHNlLCJjcmVhdGVkQXQiOiJXZWQgU2VwIDEzIDIwMjMiLCJiZWFyZXJfaWQiOiI2NTBjNDYxOWY5ODExM2RmNzJmOTUzMTYiLCJpYXQiOjE2OTU3MDc2OTQsImV4cCI6MTY5NTcxMTI5NH0.xCIdLNzm7j8_dy3p3Q8Sp2jQW_L-zTKNFnfl2wrmC8A";

export const actions: Actions = {
    default: async (e) => {
        const { request, cookies, locals } = e;

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

        cookies.set("token", longActualToken, { path: "/" });

        return { message: "Account created" };
    },
};
