import { BCRYPT, TOKEN_SERVICE } from "$backend/utils/validation"
import type { WithId } from "mongodb";
import USER_SERVICE from "../user/user.service";
import { error } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";

export default class AUTH_SERVICE {
    static signUserToken = (user: WithId<Document>) => {
        const token = TOKEN_SERVICE.sign(user);

        return { token, user };
    }

    static loginWithEmailPassword = async (email: string, password: string) => {
        const prev_user = await USER_SERVICE.getByEmail(email);

        if (!prev_user) throw error(401, {
            message: REQ_NOT_FOUND_ERROS.INCORRECT_EMAIL_OR_PASSWORD(),
        });

        const match = await BCRYPT.compare(password, prev_user.password);

        console.log({ prev_user, match });

        if (!match) throw error(401, {
            message: REQ_NOT_FOUND_ERROS.INCORRECT_EMAIL_OR_PASSWORD(),
        });

        return this.signUserToken(prev_user);
    }
}
