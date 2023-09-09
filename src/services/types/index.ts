/* ========== THEME_TYPES ========== */

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

export type Color_Palette = {
    light: THEME_SETTING_TYPE,
    dark: THEME_SETTING_TYPE,
}

export type LINK_OBJ = {
    id: string;
    user_id: string;
    short_link: string;
    original: string;
    clicks: string | number;
    status: "Active" | "Inactive";
    alias: string;
    createdAt: string;
};