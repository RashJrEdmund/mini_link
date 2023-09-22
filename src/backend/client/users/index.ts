import HTTPCLIENT from "$backend/httpclient/httpclient"
import { BASE_URL } from "$backend/utils/constants";
import type { USER } from "$services/types";

const httpclient = new HTTPCLIENT();

const getUsers = async () => {
    httpclient.GET(BASE_URL + "/users");
}

const createUsers = async (_user: USER) => {
    return httpclient.POST(BASE_URL + "/users", _user);
}

const updateUser = async (_id: string, update: any) => {
    return httpclient.PUT(BASE_URL + `/users/${_id}`, update);
}

const deleteUser = async (_id: string) => {
    return httpclient.DELETE(BASE_URL + `/users/${_id}`);
}

export {
    getUsers,
    createUsers,
    updateUser,
    deleteUser,
}
