import type { LINK_OBJ } from "../types";

export const LINK_DATA: LINK_OBJ[] = [
    {
        _id: crypto.randomUUID(),
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
        _id: crypto.randomUUID(),
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
        _id: crypto.randomUUID(),
        user_id: "1",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "My special link",
        createdAt: "Wed Sep 13 2023",
    }
]