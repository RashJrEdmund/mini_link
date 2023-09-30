import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { USER } from "$services/types";

const AUTH_BASE_URL = API_BASE_URL + "/users/auth"

const httpclient = new HTTPCLIENT();

const getCurrentUser = async (bearer_token: string) => {
    return httpclient.GET(AUTH_BASE_URL + "/current-user", {
        "Authorization": "Bearer " + bearer_token,
    });
}

const loginWithEmailPassword = async (_user: { email: string, password: string }) => {
    return httpclient.POST(AUTH_BASE_URL + "/login", _user);
}

const createUsers = async (_user: USER) => {
    return httpclient.POST(AUTH_BASE_URL + "/create-account", _user); // create user
}


export {
    getCurrentUser,
    loginWithEmailPassword,
    createUsers,
}
