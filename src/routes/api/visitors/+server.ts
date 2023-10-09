import type { RequestHandler } from './$types';

import VISITOR_CONTROLLER from '$backend/modules/visitor/visitor.controller';

export const GET: RequestHandler = VISITOR_CONTROLLER.GET_ALL_VISITORS; // get request for all visitors;

export const POST: RequestHandler = VISITOR_CONTROLLER.; // post request to login
