import { error, type Cookies } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import REQ_NOT_FOUND_ERROS from "./REQ_ERROR";
import { DEL_COOKIE_OPTIONS } from "$services/constants/cookie_options";

type STRINGIFY = (obj: any, options?: {
    _spacing?: number,
    status?: number,
}
) => string;

export const stringifyData: STRINGIFY = (obj: any, options = { _spacing: 4, status: 200 }) => {
    return JSON.stringify({ data: obj, status: options.status }, null, options._spacing);
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

export const clearAllCookies = (cookies: Cookies) => {
    const existing = cookies.getAll();

    if (!existing) return { existing: null, now: null };

    for (const { name } of existing) {
        cookies.delete(name, DEL_COOKIE_OPTIONS);
    }

    return { existing, now: cookies.getAll() }
}

export const removeObjectKeys = (object: any, arrKeys: string[]) => {
    const newObject = { ...object };

    for (const key of arrKeys) {
        delete newObject[key];
    }

    return newObject;
}
