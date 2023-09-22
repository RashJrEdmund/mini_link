import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import REQ_NOT_FOUND_ERROS from "./REQ_ERROR";

export const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
}

export const stringify = (obj: object, _spacing = 4) => {
    return JSON.stringify(obj, null, _spacing);
}

export const createObjectId = (_id?: string) => {
    try {
        if (!_id) return new ObjectId(); // for creating commpletely new ObjectIds// only for users and not urls

        return new ObjectId(_id); // this is a mongodb thing, generates a unique id base on the environment and is only for server side processes
    } catch (err) {
        throw error(401, {
            message: new REQ_NOT_FOUND_ERROS("URL").URECOGNISED_STRING_FOR_OBJECT_ID(),
        });
    }
}

// console.log("\n object id \n", createObjectId().toString(), "\n");