import type { USER } from "$services/types";
import type { ObjectId } from "mongodb";
import USER_REPO from "./user.repo";
import URL_SERVICE from "../url/url.service";

export default class USER_SERVICE {
    static getById = (_id: ObjectId) => {
        return USER_REPO.getById(_id);
    }

    static getByEmail = (email: string) => {
        return USER_REPO.getByEmail(email);
    }

    static createUser = (user: USER) => {
        return USER_REPO.createUser(user);
    }

    static getUserUrls = (_id: ObjectId) => {
        return URL_SERVICE.getUserUrls(_id);
    }

    static delete = (_id: ObjectId) => {
        return USER_REPO.delete(_id);
    }
}
