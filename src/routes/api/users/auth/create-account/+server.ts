import { AUTH_CONTROLLER } from "$backend/modules/auth/auth.controller";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = AUTH_CONTROLLER.CREATE_USER_ACCOUNT; // create request
