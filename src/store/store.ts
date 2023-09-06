import { writable } from "svelte/store";
import { COLOR_PALETTE } from "../services/constants/colors_pallete";
// import type { Color_Palette } from "../services/types";

type THEME_MODE = 'light' | "dark"

const theme_modes: THEME_MODE = "dark"

export const COLOR_PALETTE_STORE = writable(COLOR_PALETTE);

export const THEME = writable(theme_modes);
