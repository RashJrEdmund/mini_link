import VISITORS from "$db/visitors";
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

    static editVisitor = (visitor_id: string, update: any) => {
        return VISITORS.findOneAndUpdate({ visitor_id }, { $set: { ...update } });
    }

    static delete = (visitor_id: string) => {
        return VISITORS.findOneAndDelete({ visitor_id });
    }
}
