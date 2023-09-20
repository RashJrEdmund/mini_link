import type { USER } from "$services/types";
import USERS from "$db/users"

export default class USER_REPO {
    static getById = (_id: string) => {
        return USERS.findOne({ _id });
    }

    static getByEmail = (email: string) => {
        return USERS.findOne({ email });
    }

    static createUser = (user: USER) => {
        return USERS.insertOne(user);
    }

    static delete = (_id: string) => {
        return USERS.deleteOne({ _id });
    }
}
