import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { USER } from "$services/types";

const AUTH_BASE_URL = API_BASE_URL + "/users/auth"

const httpclient = new HTTPCLIENT();

type API_RETURN_TYPE = { data: USER, token: string } | { data: null };

// ========== GET_CURRENT_USER ==========>

type GET_CURRENT_USER = (bearer_token: string) => Promise<API_RETURN_TYPE>

const getCurrentUser: GET_CURRENT_USER = async (bearer_token) => {
    return httpclient.GET(AUTH_BASE_URL + "/current-user", {
        "Authorization": "Bearer " + bearer_token,
    });
}

// ========== LOGIN ==========>

type LOGING_WITH_EMAIL_PASSWORD = (_user: { email: string, password: string }) => Promise<API_RETURN_TYPE>

const loginWithEmailPassword: LOGING_WITH_EMAIL_PASSWORD = async (_user) => {
    return httpclient.POST(AUTH_BASE_URL + "/login", _user);
}

// ========== CREATE_ACCOUNT ==========>

const createUsers = async (_user: USER) => {
    return httpclient.POST(AUTH_BASE_URL + "/create-account", _user); // create user
}

export {
    getCurrentUser,
    loginWithEmailPassword,
    createUsers,
}
