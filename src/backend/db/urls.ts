import db from "./mongo"

const URLS = db.collection("urls") // the url conllection

export default URLS;
