import HTTPCLIENT from "$backend/httpclient/httpclient"
import { API_BASE_URL } from "$backend/utils/constants";
import type { VISITOR_OBJ } from "$services/types";

type VISITOR_API_RETURN_TYPE = Promise<{ data: VISITOR_OBJ | null, status: number, message?: string }>
const VISITOR_BASE_URL = API_BASE_URL + "/visitors"

const httpclient = new HTTPCLIENT();

const getAllVisitor: () => Promise<{ data: VISITOR_OBJ[] | null, status: number, message?: string } > = async () => {
    return httpclient.GET(VISITOR_BASE_URL);
}

const getOneVisitor: (_id: string) => VISITOR_API_RETURN_TYPE = async (_id) => {
    return httpclient.GET(VISITOR_BASE_URL + `/${_id}`); // get one visitor
}

const registerVisitor: (visitor: VISITOR_OBJ) => VISITOR_API_RETURN_TYPE = async (visitor) => {
    return httpclient.POST(VISITOR_BASE_URL, visitor);
}

const updateVisitor: (_id: string, update: any) => VISITOR_API_RETURN_TYPE = async (_id, update) => {
    return httpclient.PUT(VISITOR_BASE_URL + `/${_id}`, update); // create visitor
}

const deleteVisitor: (_id: string) => VISITOR_API_RETURN_TYPE = async (_id) => {
    return httpclient.DELETE(VISITOR_BASE_URL + `/${_id}`); // delete visitor
}

export {
    getAllVisitor,
    getOneVisitor,
    registerVisitor,
    updateVisitor,
    deleteVisitor,
}
