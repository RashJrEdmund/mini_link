import type { USER } from "../../../services/types";
import { USERS } from "../../db/users"
import URL_SERVICE from "../url/url.service"

export default class USER_SERVICE {
    static getById = (_id: string) => {
        return USERS.findOne({ _id });
    }

    static getByEmail = (email: string) => {
        return USERS.findOne({ email });
    }

    static createUser = (user: USER) => {
        return USERS.insertOne(user);
    }

    static getUserUrls = (_id: string) => {
        return URL_SERVICE.getUserUrls(_id);
    }

    static delete = (_id: string) => {
        return USERS.deleteOne({ _id });
    }
}
