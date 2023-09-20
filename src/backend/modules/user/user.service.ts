import type { USER } from "$services/types";
import URL_SERVICE from "../user_agent/user_agent.service";
import USER_REPO from "./user.repo";

export default class USER_SERVICE {
    static getById = (_id: string) => {
        return USER_REPO.getById(_id);
    }

    static getByEmail = (email: string) => {
        return USER_REPO.getByEmail(email);
    }

    static createUser = (user: USER) => {
        return USER_REPO.createUser(user);
    }

    static getUserUrls = (_id: string) => {
        return URL_SERVICE.getUserUrls(_id);
    }

    static delete = (_id: string) => {
        return USER_REPO.delete(_id);
    }
}
