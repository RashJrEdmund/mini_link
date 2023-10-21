import { custom_logger } from "$services/functions/utils";
import type { RequestHandler } from "@sveltejs/kit";
import type { RequestEvent } from "../../routes/$types";

// type INTEREPTOR = (e: RequestEvent, next: RequestHandler) => Promise<Response>;

// export const REQ_INTERCEPTOR: INTEREPTOR = (e: RequestEvent, next: RequestHandler ) => {
//     const { request: req } = e;
//     const authorization = req.headers.get("Authorization");
//     custom_logger("AUTHORIZATION HEADERS", {req: req.headers, authorization})

//     return next(e);
// }

type INTEREPTOR = (e: RequestEvent, next: RequestHandler) => Promise<Response>;

export const REQ_INTERCEPTOR: INTEREPTOR = (e: RequestEvent, next: RequestHandler ) => {
    const { request: req } = e;
    const authorization = req.headers.get("Authorization");
    custom_logger("AUTHORIZATION HEADERS", {req: req.headers, authorization})

    return next(e);
}
