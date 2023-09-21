import type { LINK_OBJ } from "$services/types";
import USERS_AGENTS from "../../db/userAgents";
import type { ObjectId } from "mongodb";

export default class USER_AGENT_SERVICE {
    static getById = (_id: ObjectId) => {
        return USERS_AGENTS.findOne({ _id });
    }

    static getUserUrls = (user_id: ObjectId) => {
        return USERS_AGENTS.find({ user_id }).toArray();
    }

    static createUrl = (url: LINK_OBJ) => {
        return USERS_AGENTS.insertOne(url);
    }

    static deleteOne = (_id: ObjectId) => {
        return USERS_AGENTS.deleteOne({ _id });
    }
}
