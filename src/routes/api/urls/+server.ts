import type { RequestHandler } from './$types';

import URL_CONTROLLER from '$backend/modules/url/url.controller';

export const GET: RequestHandler = URL_CONTROLLER.GET_ALL_URLS; // get request for user urls;

export const POST: RequestHandler = URL_CONTROLLER.CREATE_URL // post request to create urls;
