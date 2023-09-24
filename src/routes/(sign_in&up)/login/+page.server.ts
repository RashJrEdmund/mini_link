import { fail, type Actions } from "@sveltejs/kit";

const longActualToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBkYmE3ZGVhMjc4YWNkMjg1NWQwOGQiLCJ1c2VybmFtZSI6InBvc3QgbWFuIDEiLCJlbWFpbCI6InBvc3QgbWFuIDFAZ21haWwuY29tIiwicHJvZmlsZV9waWMiOiIiLCJpc19wcmVtaXVtX3VzZXIiOmZhbHNlLCJjcmVhdGVkQXQiOiJXZWQgU2VwIDEzIDIwMjMiLCJiZWFyZXJfaWQiOiI2NTBkYmE3ZGVhMjc4YWNkMjg1NWQwOGQiLCJpYXQiOjE2OTU1NTgwMDQsImV4cCI6MTY5NTU2MTYwNH0.-DiCvbXQUoOlwXQ-aWQioZRS-6ybtnOX-11vyOw5xXs";

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
