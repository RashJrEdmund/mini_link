import { ENTITY_ID_LENGTH } from "$services/constants/constants";
import { ObjectId } from "mongodb";
import { nanoid } from "nanoid";

export const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*"
}

export const stringify = (obj: object, _spacing = 4) => {
    return JSON.stringify(obj, null, _spacing);
}

export const generateObjectId = () => {
    return new ObjectId(ENTITY_ID_LENGTH);
}

console.log(generateObjectId().toString());