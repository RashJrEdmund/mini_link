// import bcrypt from "bcrypt"
// import jwt from "jsonwebtoken";
// import { nanoid } from "nanoid";

import { SALT_ROUNDS } from "./constants";

// console.log({ SALT_ROUNDS }, { jwt }, { bcrypt });

export class BCRYPT {
    static hash = (password: string) => {
        // return bcrypt.hash(password, SALT_ROUNDS);
        return true;
    }

    static compare = (hash: string) => {

        return true;
    }
}

export class TOKEN_SERVICE {
    static sign = (token: string) => {
        // return bcrypt.hash(password, SALT_ROUNDS);
        return true;
    }

    static verify = (token: string) => {
        return true;
    }
}
