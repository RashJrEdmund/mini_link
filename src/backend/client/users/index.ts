import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { USER } from "$services/types";

const USER_BASE_URL = API_BASE_URL + "/users"

const httpclient = new HTTPCLIENT();

const getUsers = async () => {
    return httpclient.GET(USER_BASE_URL);
}

const getOneUser = async (_id: string) => {
    return httpclient.GET(USER_BASE_URL + `/${_id}`); // get one user
}

const updateUser = async (_id: string, update: any) => {
    return httpclient.PUT(USER_BASE_URL + `/${_id}`, update); // create user
}

const deleteUser = async (_id: string) => {
    return httpclient.DELETE(USER_BASE_URL + `/${_id}`); // delete user
}

export {
    getUsers,
    getOneUser,
    updateUser,
    deleteUser,
}
