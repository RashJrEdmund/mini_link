import {
    MONGO_CONNECT_URL,
    HASH_SALT_ROUNDS,
    APP_BASE_URL,
    BASE_SHORTEN_URL as BSU
} from "$env/static/private";

type S = string;

type N = number;

export const SALT_ROUNDS: N = +HASH_SALT_ROUNDS;

export const MONGO_URL: S = MONGO_CONNECT_URL;

export const BASE_URL: S = APP_BASE_URL;

export const BASE_SHORTEN_URL: S = BSU;

export const SHORTEN_LENGTH: N = 10;
