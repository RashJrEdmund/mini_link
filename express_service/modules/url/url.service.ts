import { BASE_SHORTEN_URL } from "../../services/constants";
import { LINK_OBJ } from "../../services/types";
import EXPRESS_URL_REPO from "./url.repo";

type GETBYSHORTURL = (short_link: string) => {
    status: number,
    message: string,
    data: null
}

export default class EXPRESS_URL_SERVICE {
    static getByShortUrl = async (short_link: string) => {
        try {
            const search = `${BASE_SHORTEN_URL}/${short_link}`;

            const url = await EXPRESS_URL_REPO.getByShortUrl(search);

            if (!url) return {
                status: 404,
                message: "NO_URL_FOUND",
                data: null
            };

            return {
                status: 200,
                message: "URL_LOADED",
                data: url,
            }
        } catch {
            return {
                status: 500,
                message: "AN_ERROR_OCCURED",
                data: null
            };
        }
    }
}
