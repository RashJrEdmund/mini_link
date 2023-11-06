import HTTPCLIENT from "$backend/httpclient/httpclient"
import { AUTH_BASE_URL as ABURL } from "$backend/utils/constants";
import type { USER } from "$services/types";

const AUTH_BASE_URL = ABURL + "/api/v1/auth"

const httpclient = new HTTPCLIENT();

type API_RETURN_TYPE = Promise<{ data: { user: USER, token: string } | null, status: number, message: string }>;

// ========== GET_CURRENT_USER ==========>

const getCurrentUser: (bearer_token: string) => API_RETURN_TYPE = async (bearer_token) => {
    return httpclient.GET(AUTH_BASE_URL + "/current-user", {
        "Authorization": "Bearer " + bearer_token,
    });
}

// ========== LOGIN ==========>

const loginWithEmailPassword: (_user: { email: string, password: string }) => API_RETURN_TYPE = async (_user) => {
    return httpclient.POST(AUTH_BASE_URL + "/login", _user as unknown as BodyInit);
}

// ========== CREATE_ACCOUNT ==========>

const createUsers: (_user: USER) => API_RETURN_TYPE = async (_user) => {
    return httpclient.POST(AUTH_BASE_URL + "/create-account", _user as unknown as BodyInit); // create user
}

export {
    getCurrentUser,
    loginWithEmailPassword,
    createUsers,
}
