import URLS from "$db/urls";
import type { LINK_OBJ } from "$services/types";
import type { ObjectId, OptionalId } from "mongodb";

export default class URL_REPO {
    static getAllUrls = () => {
        return URLS.find({}).toArray();
    }

    static getById = (_id: ObjectId) => {
        return URLS.findOne({ _id });
    }

    static getUserUrls = (user_id: string) => {
        return URLS.find({ user_id }).toArray();
    }

    static createUrl = (url: OptionalId<any>) => {
        return URLS.insertOne(url);
    }

    static editUrl = (_id: ObjectId, url: LINK_OBJ) => {
        return URLS.updateOne({ _id }, { $set: { ...url } });
    }

    static deleteOne = (_id: ObjectId) => {
        return URLS.deleteOne({ _id });
    }
}
