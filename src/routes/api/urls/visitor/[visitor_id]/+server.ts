import type { RequestHandler } from '../../$types';
import URL_CONTROLLER from '$backend/modules/url/url.controller';

export const GET: RequestHandler = URL_CONTROLLER.GET_VISITOR_URLS; // get request for user urls;
