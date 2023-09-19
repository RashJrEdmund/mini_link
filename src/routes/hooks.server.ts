` ========== THIS FILE AUTOMATICALLY INVOKES WHENEVER THE PAGE LOADS. ========== `

import { start_mongo } from "../backend/db/mongo";
import { custom_logger } from "../services/functions/utils";

start_mongo().then(() => {
    console.log("mongo started...");
}).catch((er) => {
    custom_logger("ERROR", er);
});
