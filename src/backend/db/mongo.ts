import { MongoClient } from "mongodb";
import { MONGO_URL } from "$env/static/private";

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
