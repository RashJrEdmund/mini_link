import type { LINK_OBJ } from "$services/types";
import USERS_AGENTS from "../../db/userAgents"

export default class URL_SERVICE {
    static getById = (_id: string) => {
        return USERS_AGENTS.findOne({ _id });
    }

    static getUserUrls = (user_id: string) => {
        return USERS_AGENTS.find({ user_id }).toArray();
    }

    static createUrl = (url: LINK_OBJ) => {
        return USERS_AGENTS.insertOne(url);
    }

    static deleteOne = (_id: string) => {
        return USERS_AGENTS.deleteOne({ _id });
    }
}
