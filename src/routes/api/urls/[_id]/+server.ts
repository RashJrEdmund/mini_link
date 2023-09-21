import type { RequestHandler } from '../../$types';

import URL_CONTROLLER from '$backend/modules/url/url.controller';

export const GET: RequestHandler = URL_CONTROLLER.GET_ONE_URL; // get request for one urls;

export const PUT: RequestHandler = URL_CONTROLLER.EDIT_URL //  put request;

export const DELETE: RequestHandler = URL_CONTROLLER.EDLETE_URL // delte request
