import type { LINK_OBJ } from "$services/types";
import type { ObjectId } from "mongodb";
import URL_REPO from "./url.repo";
import { custom_logger } from "$services/functions/utils";

export default class URL_SERVICE {
    static getAllUrls = () => {
        return URL_REPO.getAllUrls();
    }

    static getById = (_id: ObjectId) => {
        return URL_REPO.getById(_id);
    }

    static getUserUrls = (user_id: string) => {
        return URL_REPO.getUserUrls(user_id);
    }

    static createUrl = (url: LINK_OBJ) => {
        return URL_REPO.createUrl(url);
    }

    static editUrl = async (_id: ObjectId, url: LINK_OBJ) => {
        custom_logger("go_into_edit_url", url);

        await URL_REPO.editUrl(_id, url)
            .then(res => {
                console.log({ res })
            });

        return URL_SERVICE.getById(_id);
    }

    static deleteOne = (_id: ObjectId) => {
        return URL_REPO.deleteOne(_id);
    }
}
