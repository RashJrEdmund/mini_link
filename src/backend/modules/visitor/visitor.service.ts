import type { VISITOR_OBJ } from "$services/types";
import VISITOR_REPO from "./visitor.repo";
import { createObjectId } from "$backend/utils/utils";
import { error } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import URL_SERVICE from "../url/url.service";
import { MIN_VISITOR_CHANCES } from "$backend/utils/constants";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("VISITOR");

export default class VISITOR_SERVICE {
    static getAllVisitors = () => {
        return VISITOR_REPO.getAllVisitors();
    }

    static getBy_id = (_id: string) => {
        return VISITOR_REPO.getBy_id(createObjectId(_id));
    }

    static getByVisitorId = (visitor_id: string) => {
        return VISITOR_REPO.getByVisitorId(visitor_id);
    }

    static createVisitor = async (visitor: VISITOR_OBJ) => {
        try {
            const { visitor_id } = visitor;

            const prev_visitor = await this.getByVisitorId(visitor_id);

            if (prev_visitor) return prev_visitor;

            const _id = createObjectId();

            await VISITOR_REPO.createVisitor({
                ...visitor,
                _id,
            });

            return this.getBy_id(_id.toString());
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static editVisitor = async (visitor_id: string, visitor: VISITOR_OBJ) => {
        await VISITOR_REPO.editVisitor(visitor_id, visitor);

        return this.getByVisitorId(visitor_id);
    }

    static updateVisitorLinks = async (visitor_id: string, new_url: any) => {
        const prev_visitor_links = await URL_SERVICE.getVisitorUrls(visitor_id);

        const new_links = Array.from(new Set([...prev_visitor_links, new_url])).filter(link => link.short_link); // to remove the extra {acknowledged, and insertedId} objects at the end of the array.

        const left_chances = MIN_VISITOR_CHANCES - new_links.length;

        const chances = left_chances <= 0 ? 0 : left_chances;

        await VISITOR_REPO.editVisitor(visitor_id, { links: new_links, chances }); // updateing only links
    }

    static removeVisitorsLink = async (visitor_id: string, url_id: string) => {
        const prev_visitor_links = await URL_SERVICE.getVisitorUrls(visitor_id);

        const update = prev_visitor_links.filter(link => link.short_link && link._id.toString() !== url_id); // to remove the extra {acknowledged, and insertedId} objects at the end of the array.

        await VISITOR_REPO.editVisitor(visitor_id, { links: update }); // updateing only links
    }

    static delete = (visitor_id: string) => {
        return VISITOR_REPO.delete(visitor_id);
    }
}
