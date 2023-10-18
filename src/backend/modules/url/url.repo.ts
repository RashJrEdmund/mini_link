import URLS from "$db/urls";
import type { ObjectId, OptionalId } from "mongodb";

export default class URL_REPO {
    static getAllUrls = () => {
        return URLS.find({}).toArray();
    }

    static getById = (_id: ObjectId) => {
        return URLS.findOne({ _id });
    }

    static getByOriginal = (original: string, user_id: ObjectId) => {
        return URLS.findOne({ original, user_id }); // getting both bcs another user might shorten the same link with another user.
    }

    static getOneByVisitor = (original: string, visitor_id: string) => {
        return URLS.findOne({ original, visitor_id }); // getting both bcs another visitor might shorten the same link with another user.
    }

    static getUserUrls = (user_id: ObjectId) => {
        return URLS.find({ user_id }).toArray();
    }

    static getVisitorUrls = (visitor_id: string) => {
        return URLS.find({ visitor_id }).toArray();
    }

    static createUrl = (url: OptionalId<any>) => {
        return URLS.insertOne(url);
    }

    static editUrl = (_id: ObjectId, update: any) => {
        return URLS.findOneAndUpdate({ _id }, { $set: { ...update } });
    }

    static deleteOne = (_id: ObjectId) => {
        return URLS.findOneAndDelete({ _id });
    }
}


// import { LINK_DATA } from "$services/constants/dummydata";
// import { ObjectId as OBJECTID } from "mongodb";

// console.clear();
// console.log("id \n", new OBJECTID());
// (() => {
//     const createMany = async () => {
//         const res = await URLS.insertMany([...LINK_DATA.map(link => ({
//             ...link,
//             _id: new OBJECTID(),
//             user_id: new OBJECTID("650c4619f98113df72f95316")
//         }))]);

//         return res;
//     }

//     // console.clear();
//     // console.log(createMany());
// })();
