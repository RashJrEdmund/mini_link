export type LINK_OBJ = {
    _id?: string;
    user_id: string; // null for not logged in users
    short_link?: string;
    original: string;
    clicks: string | number;
    status?: "Active" | "Inactive";
    alias?: string;
    createdAt?: string | number;
};

export type USER = {
    _id?: string, // there's sposed to be a password field
    username: string,
    email: string,
    password: string,
    profile_pic: string,
    is_premium_user: boolean,
    createdAt?: string,
    updatedAt?: string,
}

export type USER_AGENT = {
    _id: string, // This is going to bet the user-agent from the request header. also add finger print from fingerprintJs
    links: LINK_OBJ[], // this is going to 
    createdAt: string,
    updatedAt: string,
}
