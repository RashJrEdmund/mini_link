import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (_) => {
    return new Response("Mini - link API ✅");
}
