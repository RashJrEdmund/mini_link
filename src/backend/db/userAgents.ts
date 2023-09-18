import db from "./mongo";

const USERS_AGENTS = db.collection("users_agents");

export default USERS_AGENTS;
