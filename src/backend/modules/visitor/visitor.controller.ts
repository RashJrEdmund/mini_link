import { stringifyData, headers } from "$backend/utils/utils";
import { error, json, type RequestHandler } from "@sveltejs/kit";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import VISITOR_SERVICE from "./visitor.service";
import { createFromBody } from "$backend/utils/functions";

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
                data: null,
                status: er.status ?? 500,
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
                data: null,
                status: er.status ?? 500,
            });
        }
    }

    static GET_ONE_AND_CURRENT_VISITOR: RequestHandler = async (e) => {
        const { params: { visitor_id } } = e;

        if (!visitor_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const visitor = await VISITOR_SERVICE.getByVisitorId(visitor_id);

            if (!visitor) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            return new Response(stringifyData(visitor), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: er.status ?? 500,
            });
        }
    }

    static EDIT_VISITOR: RequestHandler = async (req) => {
        const body = await req.request.json();

        const { params: { visitor_id } } = req;

        try {
            const { status, new_visitor: prev_visitor } = createFromBody(body, { _type: "VISITOR", _strict: false });

            if (!visitor_id || status !== 200 || !prev_visitor) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const update_user = await VISITOR_SERVICE.editVisitor(visitor_id, prev_visitor);

            if (!update_user) throw error(500, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            return new Response(stringifyData(update_user), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: er.status ?? 500,
            });
        }
    }

    static DELETE_VISITOR: RequestHandler = async (req) => {
        const { params: { visitor_id } } = req;

        if (!visitor_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const res = await VISITOR_SERVICE.delete(visitor_id);

            if (!res) return json(
                {
                    message: `VISITOR_ID: ${visitor_id} NOT FOUND`
                },
                {
                    status: 404,
                    headers
                }
            );

            return json(
                {
                    message: `VISITOR: ${res.visitor_id ?? visitor_id} SUCCESFULLY DELETED`
                },
                {
                    status: 404,
                    headers
                }
            );
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: er.status ?? 500,
            });
        }
    }
}
