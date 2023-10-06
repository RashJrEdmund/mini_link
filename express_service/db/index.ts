import mongoose from "mongoose";
import { MONGO_CONNECT_URL } from "../services/constants";


mongoose
    .connect(MONGO_CONNECT_URL as string)
    .then(() => console.log("mongoose connected \n"))
    .catch((error) => console.log("\nerror:", error.message));

export default mongoose;