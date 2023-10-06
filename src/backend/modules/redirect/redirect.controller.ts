import { error, json, type RequestHandler } from "@sveltejs/kit";
import REDIRECT_SERVICE from "./redirect.service";
import { stringifyData, headers } from "$backend/utils/utils";
import { createFromBody } from "$backend/utils/functions";
import REQ_NOT_FOUND_ERROS from "$backend/utils/REQ_ERROR";

const ERR_MESSAGE = new REQ_NOT_FOUND_ERROS("URL");

export default class REDIRECT_CONTROLLER {
    static REDIRECT_USER: RequestHandler = async (e) => {
        const { params: { short_link } } = e;

        console.log({ short_link })

        if (!short_link) throw error(404, {
            message: ERR_MESSAGE.NOT_FOUND(),
        });

        try {
            const url = await REDIRECT_SERVICE.REDIRECT(short_link as string);

            if (!url) throw error(404, {
                message: ERR_MESSAGE.NOT_FOUND(),
            });

            return new Response(stringifyData(url), {
                headers
            });
        } catch (er: any) {
            throw error(er.status ?? 500, {
                message: er?.body?.message ?? ERR_MESSAGE.AN_ERROR_OCCURED(),
                data: null
            });
        }
    }
}
