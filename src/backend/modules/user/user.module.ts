import type { USER } from "../../../services/types";

import { BCRYPT } from "../../../services/functions/validation";
import { custom_logger } from "../../../services/functions/utils";

custom_logger("BCRYPT", BCRYPT);

export default class USER_MODULE {
    static getByEmail = (email: string) => {
        return USERS.findOne({ email });
    }

    static createUser = async (user: USER) => {
        // const hash = await bcryt
        return USERS.insertOne(user);
    }

    static getUserUrls = (_id: string) => {
        return URL_SERVICE.getUserUrls(_id);
    }

    static delete = (_id: string) => {
        return USERS.deleteOne({ _id });
    }
}
