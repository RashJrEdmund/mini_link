import { readable, writable } from "svelte/store";
import { COLOR_PALETTE } from "$services/theme/colors_pallete";
import type { COLOR_PALETTE_TYPE, LINK_OBJ, THEME_MODE, USER } from "$services/types";
import { LOCALSTORAGE } from "$services/functions/storage";
import { browser } from '$app/environment';

// if (browser) {
//     console.log("window width", window.innerWidth);
// }

let theme_modes: THEME_MODE = "light" // default-theme-mode


if (browser) {
    theme_modes = LOCALSTORAGE.get("theme_mode") === "dark" ? "dark" : "light"

    const localTheme = LOCALSTORAGE.get("theme_mode");
}

/* ========== READEABBLE_ITEMS ========== */

export const COLOR_PALETTE_STORE = readable<COLOR_PALETTE_TYPE>(COLOR_PALETTE);

export const APP_NAME = readable<string>("Mini link");

/* ========== WRITABLE_ITEMS ========== */

export const THEME = writable<THEME_MODE>(theme_modes);

export const LINK_STORE = writable<LINK_OBJ[]>([]);

export const LOADING = writable<boolean>(false);

export const CURRENT_USER = writable<USER | null>(null);
