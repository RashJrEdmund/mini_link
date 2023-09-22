import { AUTH_CONTROLLER } from "$backend/modules/auth/auth.controller";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = AUTH_CONTROLLER.CURRENT_USER; // get request to get the current user
