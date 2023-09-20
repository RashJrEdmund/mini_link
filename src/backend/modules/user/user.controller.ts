import type { USER } from "$services/types";

import { BCRYPT } from "$services/functions/validation";
import { custom_logger } from "$services/functions/utils";
import type { RequestHandler } from "@sveltejs/kit";

custom_logger("BCRYPT", BCRYPT);

const headers = {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
}

export default class USER_CONTROLLER {
    static GET_BY_ID: RequestHandler = (e) => {

        const users = [
            {
                _id: crypto.randomUUID(),
                name: "rash",
            }
        ]

        return new Response(JSON.stringify(users), {
            headers
        });
    }

    static CREATE_USER: RequestHandler = async (req) => {
        return new Response("creating user...", {
            headers
        });
    }

    static EDIT_USER: RequestHandler = async (req) => {
        const { params } = req;

        return new Response("editing user...", {
            headers
        });
    }

    static EDLETE_USER: RequestHandler = async (req) => {
        const { params } = req;

        return new Response("deleting user", {
            headers
        });
    }
}
