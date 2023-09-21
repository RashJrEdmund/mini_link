import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";

export const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
}

export const stringify = (obj: object, _spacing = 4) => {
    return JSON.stringify(obj, null, _spacing);
}

export const createObjectId = (_id: string) => {
    try {
        return new ObjectId(_id); // this is a mongodb thing, generates a unique id base on the environment and is only for server side processes
    } catch (err) {
        throw error(401, {
            message: "URECOGNISED_ID",
        });
    }
}

// console.log("\n object id \n", generateObjectId().toString(), "\n");