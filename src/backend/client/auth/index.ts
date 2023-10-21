import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { USER } from "$services/types";

const AUTH_BASE_URL = API_BASE_URL + "/users/auth"

const httpclient = new HTTPCLIENT();

type API_RETURN_TYPE = Promise<{ data: { user: USER, token: string }, status: number } | { data: null, status: number }>;

// ========== GET_CURRENT_USER ==========>

const getCurrentUser: (bearer_token: string) => API_RETURN_TYPE = async (bearer_token) => {
    return httpclient.GET(AUTH_BASE_URL + "/current-user", {
        "Authorization": "Bearer " + bearer_token,
    });
}

// ========== LOGIN ==========>

const loginWithEmailPassword: (_user: { email: string, password: string }) => API_RETURN_TYPE = async (_user) => {
    console.log("got here", 1.1, {_user})
    return httpclient.POST(AUTH_BASE_URL + "/login", _user);
}

// ========== CREATE_ACCOUNT ==========>

const createUsers: (_user: USER) => Promise<{ data: { user: USER }, status: number } | { data: null, status: number }>= async (_user) => {
    return httpclient.POST(AUTH_BASE_URL + "/create-account", _user); // create user
}

export {
    getCurrentUser,
    loginWithEmailPassword,
    createUsers,
}
