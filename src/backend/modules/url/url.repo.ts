import URLS from "$db/urls";
import type { LINK_OBJ } from "$services/types";
import type { ObjectId, OptionalId } from "mongodb";

export default class URL_REPO {
    static getAllUrls = () => {
        return URLS.find({}).toArray();
    }

    static getById = (_id: ObjectId) => {
        return URLS.findOne({ _id });
    }

    static getUserUrls = (user_id: ObjectId) => {
        return URLS.find({ user_id }).toArray();
    }

    static createUrl = (url: OptionalId<any>) => {
        return URLS.insertOne(url);
    }

    static editUrl = (_id: ObjectId, url: LINK_OBJ) => {
        return URLS.updateOne({ _id }, { $set: { ...url } });
    }

    static deleteOne = (_id: ObjectId) => {
        return URLS.deleteOne({ _id });
    }
}


// import { LINK_DATA } from "$services/constants/dummydata";
import { ObjectId as OBJECTID } from "mongodb";

console.clear();
console.log("id \n", new OBJECTID())
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
// })()
