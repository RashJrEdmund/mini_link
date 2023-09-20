import type { LINK_OBJ } from "$services/types";
import URL_REPO from "./url.repo";

export default class URL_SERVICE {
    static getById = (_id: string) => {
        return URL_REPO.getById(_id);
    }

    static getUserUrls = (user_id: string) => {
        return URL_REPO.getUserUrls(user_id);
    }

    static createUrl = (url: LINK_OBJ) => {
        return URL_REPO.createUrl(url);
    }

    static deleteOne = (_id: string) => {
        return URL_REPO.deleteOne(_id);
    }
}
