import { fail, type Actions } from "@sveltejs/kit";

const longActualToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNDYxOWY5ODExM2RmNzJmOTUzMTYiLCJ1c2VybmFtZSI6Im9yYXNodXMiLCJlbWFpbCI6Im9yYXNodXNlZG11bmRAZ21haWwuY29tIiwicHJvZmlsZV9waWMiOiIiLCJpc19wcmVtaXVtX3VzZXIiOmZhbHNlLCJjcmVhdGVkQXQiOiJXZWQgU2VwIDEzIDIwMjMiLCJiZWFyZXJfaWQiOiI2NTBjNDYxOWY5ODExM2RmNzJmOTUzMTYiLCJpYXQiOjE2OTU3MjcwNTgsImV4cCI6MTY5NTczMDY1OH0.xtb-o_3r_Z1YtwTLKuHlRrxphAImsSHHP4B5aF2J-No";

export const actions: Actions = {
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

        cookies.set("token", longActualToken, { path: "/" });

        return { message: "Logged in", status: 200 };
    },
};
