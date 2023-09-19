import { error } from '@sveltejs/kit';
import type { RequestHandler } from '../$types';
import { custom_logger } from '../../../../services/functions/utils';

export const GET: RequestHandler = async (req) => {
    const { params } = req
    const urls = [
        {
            _id: "dalkfjafdf23-dfad-daff-243jp3ioud",
            short_link: "https//mini-link.vercel-app.com/dakk2ijda2",
            original: "https//www.mangoose/edu?plus=the_end_is_near/my+shortener.orangeLink.com",
            user_id: "dafadfadfadfe-3434kj-daf343-daadf",
            status: "active",
            createdAt: new Date().toLocaleDateString(),
        }
    ];

    custom_logger("REQUEST", req);

    custom_logger("PARAMS", params);

    return new Response(JSON.stringify(urls, null, 4), {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        }
    });
}

// export const POST: RequestHandler = async (req) => {
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

//     custom_logger("REQUEST", req);

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
