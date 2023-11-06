import { PUBLIC_LINKS_PER_PAGE } from "$env/static/public";

type N = number;

export const LINKS_PER_PAGE: N = Number(PUBLIC_LINKS_PER_PAGE) || 5;
