import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { VISITOR_OBJ } from "$services/types";

type VISITOR_API_RETURN_TYPE = Promise<{ data: VISITOR_OBJ | null, status: number, message?: string }>
const VISITOR_BASE_URL = API_BASE_URL + "/visitors"

const httpclient = new HTTPCLIENT();

const getAllVisitor: () => Promise<{ data: VISITOR_OBJ[] | null, status: number, message?: string } > = async () => {
    return httpclient.GET(VISITOR_BASE_URL);
}

const getOneAndCurrentVisitor: (visitor_id: string) => VISITOR_API_RETURN_TYPE = async (visitor_id) => {
    return httpclient.GET(VISITOR_BASE_URL + `/${visitor_id ?? "_"}`); // get one visitor
}

const registerVisitor: (visitor: VISITOR_OBJ) => VISITOR_API_RETURN_TYPE = async (visitor) => {
    console.log("got herer", 4.1, {visitor});
    return httpclient.POST(VISITOR_BASE_URL, visitor);
}

const updateVisitor: (visitor_id: string, update: any) => VISITOR_API_RETURN_TYPE = async (visitor_id, update) => {
    return httpclient.PUT(VISITOR_BASE_URL + `/${visitor_id}`, update); // create visitor
}

const deleteVisitor: (visitor_id: string) => VISITOR_API_RETURN_TYPE = async (visitor_id) => {
    return httpclient.DELETE(VISITOR_BASE_URL + `/${visitor_id}`); // delete visitor
}

export {
    getAllVisitor,
    getOneAndCurrentVisitor,
    registerVisitor,
    updateVisitor,
    deleteVisitor,
}
