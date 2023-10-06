import { URL } from "../../schemas";

export default class EXPRESS_URL_REPO {
    static getByShortUrl = (short_link: string) => {
        return URL.findOne({ short_link });
    }
}
