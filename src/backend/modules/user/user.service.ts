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

    static editUser = async (_id: string, user: USER) => {
        await USER_REPO.editUser(createObjectId(_id), user);

        return this.getById(_id);
    }

    static delete = (_id: string) => {
        return USER_REPO.delete(createObjectId(_id));
    }
}
