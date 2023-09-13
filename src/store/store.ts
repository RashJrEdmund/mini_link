import { readable, writable } from "svelte/store";
import { COLOR_PALETTE } from "../services/theme/colors_pallete";
import type { LINK_OBJ, THEME_MODE } from "../services/types";
// import type { Color_Palette } from "../services/types";

const theme_modes: THEME_MODE = "dark" // default-theme-mode

/* ========== READEABBLE_ITEMS ========== */
export const COLOR_PALETTE_STORE = readable(COLOR_PALETTE);

export const APP_NAME = readable("Mini link");

/* ========== WRITABLE_ITEMS ========== */
export const THEME = writable(theme_modes);

export const LINK_STORE = writable<LINK_OBJ[]>([
    {
        id: crypto.randomUUID(),
        user_id: "1",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "Link to code sand box",
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        user_id: "1",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "Link to code sand box",
        createdAt: Date.now(),
    },
    {
        id: crypto.randomUUID(),
        user_id: "1",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "Link to code sand box",
        createdAt: Date.now(),
    }
]);
