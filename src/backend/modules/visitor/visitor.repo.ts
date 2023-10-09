import VISITORS from "$db/users";
import type { VISITOR_OBJ } from "$services/types";
import type { ObjectId, OptionalId } from "mongodb";

export default class USER_REPO {
    static getAllVisitors = () => {
        return VISITORS.find({}).toArray();
    }

    static getBy_id = (_id: ObjectId) => {
        return VISITORS.findOne({ _id });
    }

    static getByVisitorId = (visitor_id: string) => {
        return VISITORS.findOne({ visitor_id });
    }

    static createVisitor = (visitor: OptionalId<any>) => {
        return VISITORS.insertOne(visitor);
    }

    static editVisitor = (_id: ObjectId, visitor: VISITOR_OBJ) => {
        return VISITORS.findOneAndUpdate({ _id }, { $set: { ...visitor } });
    }

    static delete = (_id: ObjectId) => {
        return VISITORS.findOneAndDelete({ _id });
    }
}
