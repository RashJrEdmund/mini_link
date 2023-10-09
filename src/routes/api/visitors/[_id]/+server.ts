import type { RequestHandler } from '../../$types';
import VISITOR_CONTROLLER from '$backend/modules/visitor/visitor.controller';

export const GET: RequestHandler = VISITOR_CONTROLLER.GET_ONE_VISITOR // get request for one visitor;

export const PUT: RequestHandler = VISITOR_CONTROLLER.EDIT_VISITOR //  put request;

export const DELETE: RequestHandler = VISITOR_CONTROLLER.DELETE_VISITOR // delete request
