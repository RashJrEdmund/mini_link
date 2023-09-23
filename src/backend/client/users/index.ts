import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { USER } from "$services/types";

const httpclient = new HTTPCLIENT();

const getUsers = async () => {
    return httpclient.GET(API_BASE_URL + "/users");
}

const getOneUser = async (_id: string) => {
    return httpclient.GET(API_BASE_URL + "/users/" + _id);
}


const createUsers = async (_user: USER) => {
    return httpclient.POST(API_BASE_URL + "/users", _user);
}

const updateUser = async (_id: string, update: any) => {
    return httpclient.PUT(API_BASE_URL + `/users/${_id}`, update);
}

const deleteUser = async (_id: string) => {
    return httpclient.DELETE(API_BASE_URL + `/users/${_id}`);
}

export {
    getUsers,
    getOneUser,
    createUsers,
    updateUser,
    deleteUser,
}
