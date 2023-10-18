import { MONGO_URL } from "$backend/utils/constants";
import { MongoClient } from "mongodb";

const mongo_client_options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

const client = new MongoClient(MONGO_URL, mongo_client_options);

export function start_mongo(): Promise<MongoClient> {
    console.log("\n starting mongo DB... \n");

    return client.connect();
}

export default client.db();
