import URLS from "$db/urls";
import type { LINK_OBJ } from "$services/types";

export default class URL_REPO {
    static getById = (_id: string) => {
        return URLS.findOne({ _id });
    }

    static getUserUrls = (user_id: string) => {
        return URLS.find({ user_id }).toArray();
    }

    static createUrl = (url: LINK_OBJ) => {
        return URLS.insertOne(url);
    }

    static deleteOne = (_id: string) => {
        return URLS.deleteOne({ _id });
    }
}
