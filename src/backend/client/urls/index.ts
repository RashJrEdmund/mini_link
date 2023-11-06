import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { LINK_OBJ } from "$services/types";

type URL_API_RETURN_TYPE = Promise<{ data: LINK_OBJ | null, status: number, message?: string }>

type URLS_ARR_API_RETURN_TYPE = Promise<{ data: LINK_OBJ[] | null, status: number, message?: string }> // returns a data array data[]

const URL_BASE_URL = API_BASE_URL + "/urls"

const httpclient = new HTTPCLIENT();

const getUrls: () => URLS_ARR_API_RETURN_TYPE = async () => {
    return httpclient.GET(URL_BASE_URL);
}

const getUserUrls: (_id: string) => URLS_ARR_API_RETURN_TYPE = async (_id) => {
    return httpclient.GET(URL_BASE_URL + `/user/${_id}`);
}

const getVisitorUrls: (visitor_id: string) => URLS_ARR_API_RETURN_TYPE = async (visitor_id) => {
    return httpclient.GET(URL_BASE_URL + `/visitor/${visitor_id}`);
}

const createUrl: (_url: LINK_OBJ) => URL_API_RETURN_TYPE = async (_url: LINK_OBJ) => {
    return httpclient.POST(API_BASE_URL + "/urls", _url as unknown as BodyInit);
}

const updateUrl: (_id: string, update: any) => URL_API_RETURN_TYPE = async (_id, update) => {
    return httpclient.PUT(URL_BASE_URL + `/${_id}`, update);
}

const deleteUrl: (_id: string) => URL_API_RETURN_TYPE = async (_id) => {
    return httpclient.DELETE(URL_BASE_URL + `/${_id}`);
}

export {
    getUrls,
    getUserUrls,
    getVisitorUrls,
    createUrl,
    updateUrl,
    deleteUrl,
}
