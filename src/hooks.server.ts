` ========== THIS FILE AUTOMATICALLY INVOKES WHENEVER THE PAGE LOADS. ========== `

import { start_mongo } from "./backend/db/mongo";
import { custom_logger } from "$services/functions/utils";
import { redirect, type Handle } from "@sveltejs/kit";
import { getCurrentUser } from "$backend/client";


export const handle: Handle = async ({ resolve, event }) => {
    const { cookies, locals } = event;
    console.log("got into handle")
    // start_mongo().then(() => {
    //     console.log("mongo started...");
    // }).catch((er) => {
    //     custom_logger("ERROR", er);
    // });
    const token = cookies.get("token");

    locals.token = token;

    // const res = await getCurrentUser(token);

    // console.log({ res, token }, "hello");

    // cookies.set("hook", "i am the handle hook");
    

    const response = await resolve(event);
    return response;

    return resolve(event);
}
