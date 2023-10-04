import type { USER } from "$services/types";

type GET_USER_OR_AGENT_ID = (current_user: USER | undefined | null) => string

const getUserOrAgentId: GET_USER_OR_AGENT_ID = (current_user) => {
    if (current_user) {
        return current_user._id as string;
    }
    const user_id = crypto.randomUUID() as string || ""; // TODO +=> check if logged in or not to produce a iether a user_id or a fingerprint
    return user_id;
}

export default getUserOrAgentId
