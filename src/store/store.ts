import { readable, writable } from "svelte/store";
import { COLOR_PALETTE } from "../services/theme/colors_pallete";
import type { COLOR_PALETTE_TYPE, LINK_OBJ, THEME_MODE } from "../services/types";

const theme_modes: THEME_MODE = "dark" // default-theme-mode

/* ========== READEABBLE_ITEMS ========== */

export const COLOR_PALETTE_STORE = readable<COLOR_PALETTE_TYPE>(COLOR_PALETTE);

export const APP_NAME = readable<string>("Mini link");

/* ========== WRITABLE_ITEMS ========== */

export const THEME = writable<THEME_MODE>(theme_modes, (e) => {
    console.log("got subscribed to", e);

    return console.log("just got unscribed from", e);
});

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
        createdAt: "Thu Sep 14 2023",
    },
    {
        id: crypto.randomUUID(),
        user_id: "1",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "some other link",
        createdAt: "Tues Sep 12 2023",
    },
    {
        id: crypto.randomUUID(),
        user_id: "1",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "My special link",
        createdAt: "Wed Sep 13 2023",
    }
]);
