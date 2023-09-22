import HTTPCLIENT from "$backend/httpclient/httpclient"
import { BASE_URL } from "$backend/utils/constants";
import type { LINK_OBJ } from "$services/types";

const httpclient = new HTTPCLIENT();

const getUrls = async () => {
    return httpclient.GET(BASE_URL + "/url");
}

const getUserUrls = async (_id: string) => {
    return httpclient.GET(BASE_URL + `/url/user/${_id}`);
}

const createUrl = async (_url: LINK_OBJ) => {
    return httpclient.POST(BASE_URL + "/url", _url);
}

const updateUrl = async (_id: string, update: any) => {
    return httpclient.PUT(BASE_URL + `/url/${_id}`, update);
}

const deleteUrl = async (_id: string) => {
    return httpclient.DELETE(BASE_URL + `/url/${_id}`);
}

export {
    getUrls,
    getUserUrls,
    createUrl,
    updateUrl,
    deleteUrl,
}

console.log(getUrls()
    .then(res => res.json())
    .then(res => console.log({ res }))
)