import {
    MONGO_CONNECT_URL,
    API_BASE_URL as A_B_U,
    BASE_SHORTEN_URL as BSU,
    MIN_VISITOR_CHANCES as MVC,
    ADMIN_AUTH as AU,
    AUTH_BASE_URL as ABURL, // url of the auth service.
} from "$env/static/private";

type S = string;

type N = number;

export const MONGO_URL: S = MONGO_CONNECT_URL;

export const API_BASE_URL: S = A_B_U;

export const BASE_SHORTEN_URL: S = BSU;

export const SHORTEN_LENGTH: N = 10;

export const MIN_VISITOR_CHANCES: N = +MVC;

export const ADMIN_AUTH: S = AU; // the authorization to the api routes

export const AUTH_BASE_URL: S = ABURL;
