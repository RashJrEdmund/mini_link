` ========== THIS FILE AUTOMATICALLY INVOKES WHENEVER THE PAGE LOADS. ========== `

import { start_mongo } from "./backend/db/mongo";
import { custom_logger } from "$services/functions/utils";
import type { Handle } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export const handle: Handle = async ({ resolve, event }) => {
    const { cookies } = event;

    await start_mongo().then(() => {
        console.log("mongo started...");
    }).catch((er) => {
        custom_logger("ERROR", er);
    });

    const token = cookies.get("token");

    // const response = await resolve(event);
    // return response;

    return resolve(event);
}
