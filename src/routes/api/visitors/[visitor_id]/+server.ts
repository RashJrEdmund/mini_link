import type { RequestHandler } from '../../$types';
import VISITOR_CONTROLLER from '$backend/modules/visitor/visitor.controller';

export const GET: RequestHandler = VISITOR_CONTROLLER.GET_ONE_AND_CURRENT_VISITOR // get request for one visitor and current visitor is same request;

export const PUT: RequestHandler = VISITOR_CONTROLLER.EDIT_VISITOR //  put request;

export const DELETE: RequestHandler = VISITOR_CONTROLLER.DELETE_VISITOR // delete request
