import {
    MONGO_CONNECT_URL,
    HASH_SALT_ROUNDS,
    API_BASE_URL as A_B_U,
    BASE_SHORTEN_URL as BSU,
    JWT_PRIVATE_KEY as JWT_PK,
    TOKEN_EXPIRERY_TIME as T_E_T,
    MIN_VISITOR_CHANCES as MVC
} from "$env/static/private";

type S = string;

type N = number;

export const SALT_ROUNDS: N = Number(HASH_SALT_ROUNDS);

export const MONGO_URL: S = MONGO_CONNECT_URL;

export const API_BASE_URL: S = A_B_U;

export const BASE_SHORTEN_URL: S = BSU;

export const JWT_PRIVATE_KEY: S = JWT_PK;

export const TOKEN_EXPIRERY_TIME: S = T_E_T;

export const SHORTEN_LENGTH: N = 10;

export const MIN_VISITOR_CHANCES: N = +MVC
