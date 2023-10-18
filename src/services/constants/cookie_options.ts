import type { CookieSerializeOptions } from "cookie";

export const SET_COOKIE_OPTIONS: CookieSerializeOptions = {
    httpOnly: true, // the client js cant read if set to true. even document.cookie can't find it
    sameSite: 'strict', // just visit https://blog.logrocket.com/authentication-svelte-using-cookies/
    secure: false,
    path: '/',
    maxAge: 60 * 60 // 1hr
}

export const DEL_COOKIE_OPTIONS: CookieSerializeOptions = {
    path: "/",
}
