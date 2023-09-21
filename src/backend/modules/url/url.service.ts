import type { LINK_OBJ } from "$services/types";
import URL_REPO from "./url.repo";
import { custom_logger } from "$services/functions/utils";
import { createObjectId } from "$backend/utils/utils";

export default class URL_SERVICE {
    static getAllUrls = () => {
        return URL_REPO.getAllUrls();
    }

    static getById = (_id: string) => {
        return URL_REPO.getById(createObjectId(_id));
    }

    static getUserUrls = (user_id: string) => {
        return URL_REPO.getUserUrls(createObjectId(user_id));
    }

    static createUrl = (url: LINK_OBJ) => {
        return URL_REPO.createUrl(url);
    }

    static editUrl = async (_id: string, url: LINK_OBJ) => {
        custom_logger("go_into_edit_url", url);

        await URL_REPO.editUrl(createObjectId(_id), url)
            .then(res => {
                console.log({ res })
            });

        return this.getById(_id);
    }

    static deleteOne = (_id: string) => {
        return URL_REPO.deleteOne(createObjectId(_id));
    }
}
