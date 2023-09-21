import type { USER } from "$services/types";
import USERS from "$db/users"
import type { ObjectId } from "mongodb";

export default class USER_REPO {
    static getById = (_id: ObjectId) => {
        return USERS.findOne({ _id });
    }

    static getByEmail = (email: string) => {
        return USERS.findOne({ email });
    }

    static createUser = (user: USER) => {
        return USERS.insertOne(user);
    }

    static delete = (_id: ObjectId) => {
        return USERS.deleteOne({ _id });
    }
}
