import type { RequestHandler } from './$types';

import USER_CONTROLLER from '$backend/modules/user/user.controller';
// import { REQ_INTERCEPTOR } from '$backend/middlewares/req_interceptor';

export const GET: RequestHandler = USER_CONTROLLER.GET_ALL_USERS; // get request for all user;
