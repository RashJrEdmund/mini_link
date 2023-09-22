import type { RequestHandler } from './$types';

import USER_CONTROLLER from '$backend/modules/user/user.controller';

export const GET: RequestHandler = USER_CONTROLLER.GET_ALL_USERS; // get request for all user;

export const POST: RequestHandler = USER_CONTROLLER.CREATE_USER // create request
