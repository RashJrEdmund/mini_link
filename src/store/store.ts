import { readable, writable } from "svelte/store";
import { COLOR_PALETTE } from "../services/theme/colors_pallete";
import type { COLOR_PALETTE_TYPE, LINK_OBJ, THEME_MODE } from "../services/types";

const theme_modes: THEME_MODE = "light" // default-theme-mode

/* ========== READEABBLE_ITEMS ========== */

export const COLOR_PALETTE_STORE = readable<COLOR_PALETTE_TYPE>(COLOR_PALETTE);

export const APP_NAME = readable<string>("Mini link");

/* ========== WRITABLE_ITEMS ========== */

export const THEME = writable<THEME_MODE>(theme_modes);

export const LINK_STORE = writable<LINK_OBJ[]>([]);

export const LOADING = writable<boolean>(false);
