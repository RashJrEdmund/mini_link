import { error, json, type RequestHandler } from "@sveltejs/kit";
import URL_SERVICE from "./url.service";
import { stringifyData, headers } from "$backend/utils/utils";
import { createFromBody } from "$backend/utils/functions";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import { custom_logger } from "$services/functions/utils";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("URL");

export default class URL_CONTROLLER {
    static GET_ALL_URLS: RequestHandler = async () => {
        try {
            const urls = await URL_SERVICE.getAllUrls();

            if (!urls) throw error(404, {
                message: ERR_MESSAGE.NONE_FOUND(),
            });

            return new Response(stringifyData(urls), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: er.status ?? 500,
            });
        }
    };

    static GET_USER_URLS: RequestHandler = async (e) => {
        const { params: { user_id } } = e;

        if (!user_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND({ _strict: true }),
        });

        try {
            const userUrls = await URL_SERVICE.getUserUrls(user_id);

            if (!userUrls) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND_UNDER_IDENTIFIER("USER"),
            });

            return new Response(stringifyData(userUrls), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: er.status ?? 500,
            });
        }
    };

    static GET_VISITOR_URLS: RequestHandler = async (e) => {
        const { params: { visitor_id } } = e;

        if (!visitor_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND({ _strict: true }),
        });

        try {
            const visitor_urls = await URL_SERVICE.getVisitorUrls(visitor_id);

            if (!visitor_urls) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND_UNDER_IDENTIFIER("VISITOR"),
            });

            return new Response(stringifyData(visitor_urls), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null,
                status: er.status ?? 500,
            });
        }
    };

    static GET_ONE_URL: RequestHandler = async (e) => {
        const { params: { _id } } = e;

        if (!_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const url = await URL_SERVICE.getById(_id);

            if (!url) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            return new Response(stringifyData(url), {
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

    static CREATE_URL: RequestHandler = async (e) => {
        const body = await e.request.json()

        if (!body) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const { status, new_url } = createFromBody(body, { _type: "URL", _strict: true }); // strict mode is recomended for creation
    
            if (status !== 200 || !new_url) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const url = await URL_SERVICE.createUrl(new_url);

            return new Response(stringifyData(url), {
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

    static EDIT_URL: RequestHandler = async (req) => {
        const body = await req.request.json();

        const { params: { _id } } = req;

        try {
            const { status, new_url: prev_url } = createFromBody(body, { _type: "URL", _strict: false });

            if (!_id || status !== 200 || !prev_url) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const update_url = await URL_SERVICE.editUrl(_id, prev_url);

            if (!update_url) throw error(500, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            return new Response(stringifyData(update_url), {
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

    static DELETE_URL: RequestHandler = async (req) => {
        const { params: { _id } } = req;

        if (!_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const res = await URL_SERVICE.deleteOne(_id);

            if (!res) return json(
                {
                    message: `URL_ID: ${_id} NOT FOUND`
                },
                {
                    status: 404,
                    headers
                }
            );

            return json(
                {
                    message: `URL_${res.alias ? "ALIAS" : "ID"}: ${res.alias ? res.alias : _id} SUCCESFULLY DELETED`
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
