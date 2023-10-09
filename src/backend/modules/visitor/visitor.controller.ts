import { stringifyData, headers } from "$backend/utils/utils";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import VISITOR_SERVICE from "./visitor.service";
import { createFromBody } from "$backend/utils/functions";
import { custom_logger } from "$services/functions/utils";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("VISITOR");

export default class VISITOR_CONTROLLER {
    static CREATE_VISITOR: RequestHandler = async (e) => {
        const body = await e.request.json();

        if (!body) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const { status, new_visitor } = createFromBody(body, { _type: "VISITOR", _strict: true }); // strict mode is recomended for creation

            if (status !== 200 || !new_visitor) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            custom_logger("new visitor", new_visitor);

            const visitor = await VISITOR_SERVICE.createVisitor(new_visitor);

            if (!visitor) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            return new Response(stringifyData(visitor), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null
            });
        }
    }

    static GET_ALL_VISITORS: RequestHandler = async () => {
        try {
            const visitors = await VISITOR_SERVICE.getAllVisitors();

            if (!visitors) throw error(404, {
                message: ERR_MESSAGE.NONE_FOUND(),
            });

            return new Response(stringifyData(visitors), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static GET_ONE_VISITOR: RequestHandler = async (e) => {
        const { params: { _id } } = e;

        if (!_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const visitor = await VISITOR_SERVICE.getBy_id(_id);

            if (!visitor) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            return new Response(stringifyData(visitor), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static EDIT_VISITOR: RequestHandler = async (req) => {
        const body = await req.request.json();

        const { params: { _id } } = req;

        try {
            const { status, new_visitor: prev_visitor } = createFromBody(body, { _type: "VISITOR", _strict: false });

            if (!_id || status !== 200 || !prev_visitor) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const update_user = await VISITOR_SERVICE.editVisitor(_id, prev_visitor);

            if (!update_user) throw error(500, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            return new Response(stringifyData(update_user), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static DELETE_VISITOR: RequestHandler = async (req) => {
        const { params: { _id } } = req;

        if (!_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const res = await VISITOR_SERVICE.delete(_id);

            if (!res) return json(
                {
                    message: `VISITOR_ID: ${_id} NOT FOUND`
                },
                {
                    status: 404,
                    headers
                }
            );

            return json(
                {
                    message: `VISITOR: ${res._id ?? _id} SUCCESFULLY DELETED`
                },
                {
                    status: 404,
                    headers
                }
            );
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }
}
