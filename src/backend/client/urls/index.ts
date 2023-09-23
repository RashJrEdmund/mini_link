import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { LINK_OBJ } from "$services/types";

const httpclient = new HTTPCLIENT();

const getUrls = async () => {
    return httpclient.GET(API_BASE_URL + "/urls");
}

const getUserUrls = async (_id: string) => {
    return httpclient.GET(API_BASE_URL + `/urls/user/${_id}`);
}

const createUrl = async (_url: LINK_OBJ) => {
    return httpclient.POST(API_BASE_URL + "/urls", _url);
}

const updateUrl = async (_id: string, update: any) => {
    return httpclient.PUT(API_BASE_URL + `/urls/${_id}`, update);
}

const deleteUrl = async (_id: string) => {
    return httpclient.DELETE(API_BASE_URL + `/urls/${_id}`);
}

export {
    getUrls,
    getUserUrls,
    createUrl,
    updateUrl,
    deleteUrl,
}
