import { BCRYPT, TOKEN_SERVICE } from "$backend/utils/validation"
import type { WithId } from "mongodb";
import USER_SERVICE from "../user/user.service";
import { error } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import { removeObjectKeys } from "$backend/utils/utils";

export default class AUTH_SERVICE {
    static signUserToken = (user: WithId<Document>) => {
        const token = TOKEN_SERVICE.sign(user);

        return { token, user };
    }

    static verifyUserToken = async (token: string) => {
        return TOKEN_SERVICE.verify(token); // returns the token bearer;
    }

    static loginWithEmailPassword = async (email: string, password: string) => {
        let prev_user = await USER_SERVICE.getByEmail(email);

        if (!prev_user) throw error(401, {
            message: REQ_NOT_FOUND_ERROS.INCORRECT_EMAIL_OR_PASSWORD(),
        });

        // const match = await BCRYPT.compare(password, prev_user.password);

        // if (!match) throw error(401, {
        //     message: REQ_NOT_FOUND_ERROS.INCORRECT_EMAIL_OR_PASSWORD(),
        // });

        prev_user = removeObjectKeys(prev_user, ["password"]) // removing the password field;
        // const token =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBkYmE3ZGVhMjc4YWNkMjg1NWQwOGQiLCJ1c2VybmFtZSI6InBvc3QgbWFuIDEiLCJlbWFpbCI6InBvc3QgbWFuIDFAZ21haWwuY29tIiwicHJvZmlsZV9waWMiOiIiLCJpc19wcmVtaXVtX3VzZXIiOmZhbHNlLCJjcmVhdGVkQXQiOiJXZWQgU2VwIDEzIDIwMjMiLCJiZWFyZXJfaWQiOiI2NTBkYmE3ZGVhMjc4YWNkMjg1NWQwOGQiLCJpYXQiOjE2OTU0ODg0OTcsImV4cCI6MTY5NTQ5MjA5N30.wx3MTz8e1CPUzHNlKkyodD5tfrQQFJEWu7iwOJe-MWI"
        // return {token, user: prev_user}

        return this.signUserToken(prev_user);
    }
}
