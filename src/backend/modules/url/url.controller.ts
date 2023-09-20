import { error, type RequestHandler } from "@sveltejs/kit";
import { custom_logger } from "$services/functions/utils";

const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
}

export default class URL_CONTROLLER {
    static GET_URLS: RequestHandler = async (req) => {
        const { params: { user_id } } = req;

        if (!user_id) throw error(404, {
            message: "NOT_FOUND"
        });

        try {
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

            custom_logger("PARAMS", user_id);

            return new Response(JSON.stringify(urls, null, 4), {
                headers
            });
        } catch (er) {
            throw error(500, {
                message: "AN_ERROR_OCCURED"
            })
        }
    }


    static CREATE_URL: RequestHandler = async (req) => {
        return new Response("creating url...", {
            headers
        });
    }

    static EDIT_URL: RequestHandler = async (req) => {
        const { params } = req;

        return new Response("editing url...", {
            headers
        });
    }

    static EDLETE_URL: RequestHandler = async (req) => {
        const { params } = req;

        return new Response("deleting url", {
            headers
        });
    }
}
