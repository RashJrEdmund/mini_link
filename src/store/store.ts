import { readable, writable } from "svelte/store";
import { COLOR_PALETTE } from "../services/constants/colors_pallete";
// import type { Color_Palette } from "../services/types";

type THEME_MODE = 'light' | "dark"

const theme_modes: THEME_MODE = "dark" // default-theme-mode

/* ========== READEABBLE_ITEMS ========== */
export const COLOR_PALETTE_STORE = readable(COLOR_PALETTE);

export const APP_NAME = readable("mini link");

/* ========== WRITABLE_ITEMS ========== */
export const THEME = writable(theme_modes);
