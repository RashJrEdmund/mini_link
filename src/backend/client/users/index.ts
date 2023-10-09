import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { USER } from "$services/types";

type USER_API_RETURN_TYPE = Promise<{ data: USER | null, status: number, message?: string }>

const USER_BASE_URL = API_BASE_URL + "/users"

const httpclient = new HTTPCLIENT();

const getUsers: () => Promise<{ data: USER[] | null, status: number, message?: string }>= async () => {
    return httpclient.GET(USER_BASE_URL);
}

const getOneUser: (_id: string) => USER_API_RETURN_TYPE = async (_id) => {
    return httpclient.GET(USER_BASE_URL + `/${_id}`); // get one user
}

const updateUser: (_id: string, update: any) => USER_API_RETURN_TYPE = async (_id, update) => {
    return httpclient.PUT(USER_BASE_URL + `/${_id}`, update); // create user
}

const deleteUser: (_id: string) => USER_API_RETURN_TYPE = async (_id: string) => {
    return httpclient.DELETE(USER_BASE_URL + `/${_id}`); // delete user
}

export {
    getUsers,
    getOneUser,
    updateUser,
    deleteUser,
}
