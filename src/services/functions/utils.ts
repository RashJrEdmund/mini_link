import toast from "svelte-french-toast";
import type { THEME_MODE } from "../types";

type InvertBoolean = (bool: boolean) => boolean;
// 37.223056, 38.922500 coordinates to fireship
type LoggerTYPe = (_label: string, val: any, options?: {
    clear?: boolean,
    type?: "warn" | "error" | "log",
}) => void;

type COPY = (short_link: string) => void | null;

export const invertBooleanValue: InvertBoolean = (bool) => {
    return !bool;
}

export const INVERT_THEME: (_theme: THEME_MODE) => THEME_MODE = (_theme) => {
    return _theme === "dark" ? "light" : "dark"
}

export const custom_logger: LoggerTYPe = (_label, val, options) => {
    if (options?.clear) console.clear();

    const _log_type = options?.type ?? "log";

    return console[_log_type](
        `\n \n ========== START ${_label} ========== \n \n`,
        val,
        `\n \n ========== END ${_label} ========== \n \n`
    );
}

export const shorten_text = (text: string | undefined) => {
    if (!text) return "username";

    const max_length = 15;
    return text.length <= max_length ? text : text.substring(0, max_length - 3) + "...";
}


export const getUniqueArray = (arr: any[], update: unknown) => {
    return Array.from(new Set([...arr, update]));
}

export const copyLink: COPY =  (short_link) => {
    navigator.clipboard.writeText(short_link)
        .then(() => toast.success("link copied"))
        .catch(() => toast.error("try again"));
}