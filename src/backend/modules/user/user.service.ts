import type { USER } from "$services/types";
import USER_REPO from "./user.repo";
import { createObjectId } from "$backend/utils/utils";
import { BCRYPT } from "$backend/utils/validation";
import { error } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("USER");

export default class USER_SERVICE {
    static getAllUsers = () => {
        return USER_REPO.getAllUsers();
    }

    static getById = (_id: string) => {
        return USER_REPO.getById(createObjectId(_id));
    }

    static getByEmail = (email: string) => {
        return USER_REPO.getByEmail(email);
    }

    static createUser = async (user: USER) => {
        try {
            const { email } = user;

            const prev_user = await this.getByEmail(email);

            if (prev_user) return prev_user;

            const password_hash = await BCRYPT.hash(user.password); // returns the password hash

            const _id = createObjectId();

            await USER_REPO.createUser({
                ...user,
                _id,
                password: password_hash,
            });

            return this.getById(_id.toString());
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static editUser = async (_id: string, user: USER) => {
        await USER_REPO.editUser(createObjectId(_id), user);

        return this.getById(_id);
    }

    static delete = (_id: string) => {
        return USER_REPO.delete(createObjectId(_id));
    }
}
