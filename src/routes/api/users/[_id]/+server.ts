import type { RequestHandler } from '../../$types';
import USER_CONTROLLER from '$backend/modules/user/user.controller';

export const GET: RequestHandler = USER_CONTROLLER.GET_ONE_USER; // get request for one user;

export const PUT: RequestHandler = USER_CONTROLLER.EDIT_USER //  put request;

export const DELETE: RequestHandler = USER_CONTROLLER.DELETE_USER // delete request
