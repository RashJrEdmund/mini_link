import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { LINK_OBJ } from "$services/types";

const URL_BASE_URL = API_BASE_URL + "/urls"

const httpclient = new HTTPCLIENT();

const getUrls = async () => {
    return httpclient.GET(URL_BASE_URL);
}

const getUserUrls = async (_id: string) => {
    return httpclient.GET(URL_BASE_URL + `/user/${_id}`);
}

const createUrl = async (_url: LINK_OBJ) => {
    return httpclient.POST(API_BASE_URL + "/urls", _url);
}

const updateUrl = async (_id: string, update: any) => {
    return httpclient.PUT(URL_BASE_URL + `/${_id}`, update);
}

const deleteUrl = async (_id: string) => {
    return httpclient.DELETE(URL_BASE_URL + `/${_id}`);
}

export {
    getUrls,
    getUserUrls,
    createUrl,
    updateUrl,
    deleteUrl,
}
