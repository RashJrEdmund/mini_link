import type { RequestHandler } from '../../$types';
import URL_CONTROLLER from '$backend/modules/url/url.controller';

export const GET: RequestHandler = URL_CONTROLLER.GET_USER_URLS; // get request for user urls;

export const POST: RequestHandler = URL_CONTROLLER.CREATE_URL // post request;

export const PUT: RequestHandler = URL_CONTROLLER.EDIT_URL //  put request;

export const DELETE: RequestHandler = URL_CONTROLLER.EDLETE_URL // delte request

// export const GET: RequestHandler = async (req) => {
//     const urls = [
//         {
//             _id: "dalkfjafdf23-dfad-daff-243jp3ioud",
//             short_link: "https//mini-link.vercel-app.com/dakk2ijda2",
//             original: "https//www.mangoose/edu?plus=the_end_is_near/my+shortener.orangeLink.com",
//             user_id: "dafadfadfadfe-3434kj-daf343-daadf",
//             status: "active",
//             createdAt: new Date().toLocaleDateString(),
//         }
//     ];

//     // custom_logger("REQUEST", req);

//     return new Response(JSON.stringify(urls), {
//         headers: {
//             "Content-type": "application/json",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "*"
//         }
//     });
// }

// export const PUT: RequestHandler = async (req) => {

//     custom_logger("REQUEST", req);
// }

// export const DEL: RequestHandler = async (req) => {
//     custom_logger("REQUEST", req);
// }
