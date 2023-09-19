import { readable, writable } from "svelte/store";
import { COLOR_PALETTE } from "../services/theme/colors_pallete";
import type { COLOR_PALETTE_TYPE, LINK_OBJ, THEME_MODE } from "../services/types";
import { LOCALSTORAGE } from "../services/functions/storage";
import { browser } from '$app/environment';

if (browser) {
    console.log(window.innerWidth);
}

let theme_modes: THEME_MODE = "light" // default-theme-mode


if (browser) {
    theme_modes = LOCALSTORAGE.get("theme_mode") === "dark" ? "dark" : "light"

    const localTheme = LOCALSTORAGE.get("theme_mode");

    console.log("theme_mode", theme_modes, typeof theme_modes, localTheme.length, localTheme);
}

/* ========== READEABBLE_ITEMS ========== */

export const COLOR_PALETTE_STORE = readable<COLOR_PALETTE_TYPE>(COLOR_PALETTE);

export const APP_NAME = readable<string>("Mini link");

/* ========== WRITABLE_ITEMS ========== */

export const THEME = writable<THEME_MODE>(theme_modes);

export const LINK_STORE = writable<LINK_OBJ[]>([]);

export const LOADING = writable<boolean>(false);


console.log("ran 1", theme_modes);

console.log("ran 2", theme_modes);