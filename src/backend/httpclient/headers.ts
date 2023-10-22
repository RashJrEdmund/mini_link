import { ADMIN_AUTH } from "$backend/utils/constants";

export const createHeaders = () => {

    return {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    };

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Methods", "*");
    myHeaders.append("Authorization", ADMIN_AUTH);

    return myHeaders;
};
