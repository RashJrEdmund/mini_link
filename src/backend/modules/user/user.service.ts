import type { USER } from "$services/types";
import USER_REPO from "./user.repo";
import { createObjectId } from "$backend/utils/utils";

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
        const { email } = user;

        const prev_user = await this.getByEmail(email);

        if (prev_user) return prev_user;

        const _id = createObjectId();

        await USER_REPO.createUser({
            ...user,
            _id
        });

        return this.getById(_id.toString());
    }

    static editUser = async (_id: string, user: USER) => {
        await USER_REPO.editUser(createObjectId(_id), user);

        return this.getById(_id);
    }

    static delete = (_id: string) => {
        return USER_REPO.delete(createObjectId(_id));
    }
}
