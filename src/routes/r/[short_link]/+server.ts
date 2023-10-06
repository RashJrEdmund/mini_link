import type { RequestHandler } from './$types';
import REDIRECT_CONTROLLER from '$backend/modules/redirect/redirect.controller';

export const GET: RequestHandler = REDIRECT_CONTROLLER.REDIRECT_USER; // get request for redirecting;

// export const GET: RequestHandler = async () => {

//     // throw redirect(300, "/")
//     return new Response("Mini - link redirect section ✅");
// }
