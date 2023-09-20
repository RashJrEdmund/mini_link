import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (req) => {
    // custom_logger("REQUEST", req);

    return new Response("getting all users...");
}
