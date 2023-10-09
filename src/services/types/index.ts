/* ========== THEME_TYPES ========== */

export type THEME_MODE = 'light' | "dark"

export type THEME_SETTING_TYPE = {
    lite_gray: string,
    text: string,
    bg: string,
    app_bg: string,
    bg_gray: string,
    border: string,
    active_link: string,
    inactive_link: string,
    lite_blue: string, // twitter_blue
    main_blue: string,
    main_pink: string,
    disable_btn: string,
}

export type COLOR_PALETTE_TYPE = {
    light: THEME_SETTING_TYPE,
    dark: THEME_SETTING_TYPE,
}

export type LINK_OBJ = {
    _id?: string;
    user_id: string; // null for not logged in users
    visitor_id?: string,
    short_link?: string;
    original: string;
    clicks: string | number;
    status?: "Active" | "Inactive";
    alias?: string;
    createdAt?: string | number;
};

export type USER = {
    _id?: string, // there's sposed to be a password field
    username: string,
    email: string,
    password: string,
    profile_pic: string,
    is_premium_user: boolean,
    createdAt?: string,
    updatedAt?: string,
}

export type VISITOR_OBJ = {
    _id?: string, // normal _id from mongodb
    links?: LINK_OBJ[], // this is going to 
    visitor_id: string, // from fingerprintjs
    chances: number,
    user_id?: string, // just incase.
    createdAt: string,
    updatedAt?: string,
}
