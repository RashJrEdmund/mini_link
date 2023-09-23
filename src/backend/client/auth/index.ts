import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";

const httpclient = new HTTPCLIENT();

const getCurrentUser = async () => {
    return httpclient.GET(API_BASE_URL + "/users/auth/current-user");
}

const loginWithEmailPassword = async (_user: { email: string, password: string }) => {
    return httpclient.POST(API_BASE_URL + "/users/auth/login", _user);
}

export {
    getCurrentUser,
    loginWithEmailPassword,
}
