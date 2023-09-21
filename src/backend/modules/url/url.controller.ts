import { error, type RequestHandler } from "@sveltejs/kit";
import { custom_logger } from "$services/functions/utils";
import URL_SERVICE from "./url.service";
import { stringify, headers } from "$backend/utils/utils";
import { createFromBody } from "$backend/utils/functions/functions";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";
import { ObjectId } from "mongodb";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("URL");
export default class URL_CONTROLLER {
    ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("URL");

    static GET_ALL_URLS: RequestHandler = async () => {
        try {
            const urls = await URL_SERVICE.getAllUrls();

            if (!urls) throw error(404, {
                message: ERR_MESSAGE.NONE_FOUND(),
            });

            return new Response(stringify(urls));
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    };

    static GET_USER_URLS: RequestHandler = async (req) => {
        const { params: { user_id } } = req;

        if (!user_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND({ _strict: true }),
        });

        custom_logger("USER_ID", { user_id });

        try {
            const userUrls = await URL_SERVICE.getUserUrls(user_id);

            if (!userUrls) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND_UNDER_USER(),
            });

            return new Response(stringify(userUrls), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    };

    static GET_ONE_URL: RequestHandler = async (req) => {
        const { params: { _id } } = req;

        if (!_id) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const url = await URL_SERVICE.getById(_id);
            console.clear();
            console.log({ url })

            if (!url) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            return new Response(stringify(url), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static CREATE_URL: RequestHandler = async (req) => {
        const { request: { body } } = req;

        if (!body) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const { status, new_url } = createFromBody(body, "URL");

            if (status !== 200 || !new_url) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const url = await URL_SERVICE.createUrl(new_url);

            return new Response(stringify(url), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                er
            });
        }
    }

    static EDIT_URL: RequestHandler = async (req) => {
        const body = await req.request.json();

        const { params: { _id } } = req;

        custom_logger("EDIT_REQUEST", { body, _id, mongoId: new ObjectId(_id).toString(), ObjectId }, { clear: true });

        // const update_url = await URL_SERVICE.editUrl(new ObjectId(_id), body);

        // return new Response(update_url, {
        //     headers
        // });

        try {
            const { status, new_url: prev_url } = createFromBody(body, { _type: "URL", _strict: false });

            if (!_id || status !== 200 || !prev_url) throw error(404, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            const update_url = await URL_SERVICE.editUrl(_id, prev_url);

            if (!update_url) throw error(500, {
                message: ERR_MESSAGE.MISSING_DETAILS(),
            });

            return new Response(stringify(update_url), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
            });
        }
    }

    static EDLETE_URL: RequestHandler = async (req) => {
        const { params } = req;

        return new Response("deleting url", {
            headers
        });
    }
}
