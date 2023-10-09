import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { VISITOR_OBJ } from "$services/types";

const VISITOR_BASE_URL = API_BASE_URL + "/visitors"

const httpclient = new HTTPCLIENT();

const getVisitor = async () => {
    return httpclient.GET(VISITOR_BASE_URL);
}

const getOneVisitor = async (_id: string) => {
    return httpclient.GET(VISITOR_BASE_URL + `/${_id}`); // get one visitor
}

const updateVisitor = async (_id: string, update: any) => {
    return httpclient.PUT(VISITOR_BASE_URL + `/${_id}`, update); // create visitor
}

const deleteVisitor = async (_id: string) => {
    return httpclient.DELETE(VISITOR_BASE_URL + `/${_id}`); // delete visitor
}

export {
    getVisitor,
    getOneVisitor,
    updateVisitor,
    deleteVisitor,
}
