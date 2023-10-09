import type { VISITOR_OBJ } from "$services/types";
import VISITOR_REPO from "./visitor.repo";
import { createObjectId } from "$backend/utils/utils";
import { error } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";

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

            if (prev_visitor) throw error(401, {
                message: ERR_MESSAGE.FIELD_ALREADY_EXITS("visitor_id"),
            });

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

    static editVisitor = async (_id: string, visitor: VISITOR_OBJ) => {
        await VISITOR_REPO.editVisitor(createObjectId(_id), visitor);

        return this.getBy_id(_id);
    }

    static delete = (_id: string) => {
        return VISITOR_REPO.delete(createObjectId(_id));
    }
}
