/* ========== THEME_TYPES ========== */

export type THEME_SETTING_TYPE = {
    text: string,
    bg: string,
    bg_gray: string,
    border: string,
    active_link: string,
    inactive_link: string,
    main_blue: string,
    main_pink: string,
    disable_btn: string,
}

export type Color_Palette = {
    light: THEME_SETTING_TYPE,
    dark: THEME_SETTING_TYPE,
}
