import type { USER } from "$services/types"

type user_disp = {
    ui_key: string,
    api_res: keyof USER;
}

export const user_display_fields: user_disp[] = [
    {
        ui_key: "Username",
        api_res: "username",
    },
    {
        ui_key: "Email",
        api_res: "email"
    },
    {
        ui_key: "Joined Since",
        api_res: "createdAt",
    },
    {
        ui_key: "Premium Access",
        api_res: "is_premium_user"
    }
]
