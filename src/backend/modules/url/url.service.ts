import type { LINK_OBJ } from "$services/types";
import URL_REPO from "./url.repo";
import { createObjectId } from "$backend/utils/utils";
import { BASE_SHORTEN_URL, SHORTEN_LENGTH } from "$backend/utils/constants";
import { nanoid } from "nanoid";
import VISITOR_SERVICE from "../visitor/visitor.service";

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

    static getOneByVisitor = (original: string, visitor_id: string) => {
        return URL_REPO.getOneByVisitor(original, visitor_id);
    }

    static getUserUrls = (user_id: string) => {
        return URL_REPO.getUserUrls(createObjectId(user_id));
    }

    static getVisitorUrls = (visitor_id: string) => {
        return URL_REPO.getVisitorUrls(visitor_id);
    }

    static createUrl = async (url: LINK_OBJ) => {
        const { original, user_id, visitor_id } = url;

        if (original && user_id) { // for a logged in user
            const prev_url_by_user = await this.getByOriginal(original, user_id);

            if (prev_url_by_user) return prev_url_by_user; // previous url by user bcs another user could have shortened thesame url.
        }

        if (original && visitor_id) {
            const prev_url_by_visitor = await this.getOneByVisitor(original, visitor_id);

            if (prev_url_by_visitor) return prev_url_by_visitor;
        }

        const _id = createObjectId();

        const new_url = await URL_REPO.createUrl({
            ...url,
            _id,
            user_id: user_id.trim() ? createObjectId(user_id) : "",
            visitor_id: visitor_id || "",
            short_link: `${BASE_SHORTEN_URL}/${nanoid(SHORTEN_LENGTH)}` // generating short_link
        });

        if (original && visitor_id) { // meaning the above is to create a url for a visitor;
            VISITOR_SERVICE.updateVisitorLinks(visitor_id, new_url); // leaving it async so as not to block the thread.
        }

        return this.getById(_id.toString());
    }

    static editUrl = async (_id: string, url: LINK_OBJ) => {
        await URL_REPO.editUrl(createObjectId(_id), url);

        return this.getById(_id);
    }

    static deleteOne = async (_id: string) => {
        const url = await this.getById(_id);

        if (url && url.visitor_id.trim()) { // meaning the visitor_id property exist thus it belonged to visitor.
            VISITOR_SERVICE.removeVisitorsLink(url.visitor_id, _id);
        }

        return URL_REPO.deleteOne(createObjectId(_id));
    }
}
