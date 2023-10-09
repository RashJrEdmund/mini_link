import type { LINK_OBJ } from "$services/types";
import URL_REPO from "./url.repo";
import { createObjectId } from "$backend/utils/utils";
import { BASE_SHORTEN_URL, SHORTEN_LENGTH } from "$backend/utils/constants";
import { nanoid } from "nanoid";

export default class URL_SERVICE {
    static getAllUrls = () => {
        return URL_REPO.getAllUrls();
    }

    static getById = (_id: string) => {
        return URL_REPO.getById(createObjectId(_id));
    }

    static getByOriginal = (original: string, user_id: string) => {
        return URL_REPO.getByOriginal(original, createObjectId(user_id));
    }

    static getUserUrls = (user_id: string) => {
        return URL_REPO.getUserUrls(createObjectId(user_id));
    }

    static createUrl = async (url: LINK_OBJ) => {
        const { original, user_id } = url;

        const prev_url_by_user = await this.getByOriginal(original, user_id);

        if (prev_url_by_user) return prev_url_by_user; // previous url by user bcs another user could have shortened thesame url.

        const _id = createObjectId();

        await URL_REPO.createUrl({
            ...url,
            _id,
            user_id: createObjectId(url.user_id),
            short_link: `${BASE_SHORTEN_URL}/${nanoid(SHORTEN_LENGTH)}` // generating short_link
        });

        return this.getById(_id.toString());
    }

    static editUrl = async (_id: string, url: LINK_OBJ) => {
        await URL_REPO.editUrl(createObjectId(_id), url);

        return this.getById(_id);
    }

    static deleteOne = (_id: string) => {
        return URL_REPO.deleteOne(createObjectId(_id));
    }
}
