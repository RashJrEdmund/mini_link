import USER_CONTROLLER from '$backend/modules/user/user.controller';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = USER_CONTROLLER.GET_BY_ID; // get request;

export const POST: RequestHandler = USER_CONTROLLER.CREATE_USER // post request;

export const PUT: RequestHandler = USER_CONTROLLER.EDIT_USER //  put request;

export const DELETE: RequestHandler = USER_CONTROLLER.EDLETE_USER // delte request
