type User = {
    username: string,
    profile_pic: string,
    is_premium_user: boolean,
    createdAt: string,
    updatedAt: string,
}

type GetUser = () => User | null;

const verifyToken = () => {
    const token = localStorage.getItem("token");
    return !!token
}

export const getUser: GetUser = () => {
    const is_logged_in = verifyToken();

    if (!is_logged_in) return null;
    
    return {
        username: "Rash Edmund",
        profile_pic: "some url",
        is_premium_user: false,
        createdAt: "Thu Sep 07 2023",
        updatedAt: 'Thu Sep 07 2023'
    }
}
