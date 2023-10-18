import type { LINK_OBJ, USER } from "../types";

export const LINK_DATA: LINK_OBJ[] = [
    {
        user_id: "650c4619f98113df72f95316",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "Link to code sand box",
        createdAt: "Thu Sep 14 2023",
    },
    {
        user_id: "650c4619f98113df72f95316",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "some other link",
        createdAt: "Tues Sep 12 2023",
    },
    {
        user_id: "650d28dbea44abbab1b6ed25",
        short_link: "https://minilink.com/aZxxklairll",
        original:
            "https://codesandbox.io/s/eager-snow-fpnqw4?file=/src/App.svelte",
        clicks: 2,
        status: "Active",
        alias: "My special link",
        createdAt: "Wed Sep 13 2023",
    }
]

export const SAMPLE_USERS: USER[] = [
    {
        _id: "650c4619f98113df72f95316",
        username: "rash",
        email: "orashusedmund@gmail.com",
        password: "1234",
        profile_pic: "",
        is_premium_user: true,
        createdAt: "Wed Sep 13 2023"
    },
    {
        username: "kiven_alaric",
        email: "kivenalaric@gmail.com",
        password: "1234",
        profile_pic: "",
        is_premium_user: false,
        createdAt: "Wed Sep 13 2023"
    },
    {
        _id: "650d28dbea44abbab1b6ed25",
        username: "ettie",
        email: "orocesthermbi@gmail.com",
        password: "1234",
        profile_pic: "",
        is_premium_user: true,
        createdAt: "Wed Sep 13 2023"
    },
    {
        username: "senator_josh",
        email: "senatorjosh@gmail.com",
        password: "1234",
        profile_pic: "",
        is_premium_user: true,
        createdAt: "Wed Sep 13 2023"
    },
    {
        username: "malone",
        email: "pennmalone@gmail.com",
        password: "1234",
        profile_pic: "",
        is_premium_user: true,
        createdAt: "Wed Sep 13 2023"
    },
    {
        username: "chrissgodden",
        email: "chrissgodden@gmail.com",
        password: "1234",
        profile_pic: "",
        is_premium_user: false,
        createdAt: "Wed Sep 13 2023"
    }
]