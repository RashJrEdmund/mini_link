import USERS from "$db/users";
import type { ObjectId, OptionalId } from "mongodb";

export default class USER_REPO {
    static getAllUsers = () => {
        return USERS.find({}).toArray();
    }

    static getById = (_id: ObjectId) => {
        return USERS.findOne({ _id });
    }

    static getByEmail = (email: string) => {
        return USERS.findOne({ email });
    }

    static createUser = (user: OptionalId<any>) => {
        return USERS.insertOne(user);
    }

    static editUser = (_id: ObjectId, update: any) => {
        return USERS.findOneAndUpdate({ _id }, { $set: { ...update } });
    }

    static delete = (_id: ObjectId) => {
        return USERS.findOneAndDelete({ _id });
    }
}

// import { SAMPLE_USERS } from "$services/constants/dummydata";
// import { ObjectId as OBJECTID } from "mongodb";

// console.clear();
// console.log("id \n", new OBJECTID());
// (() => {
//     const createMany = async () => {
//         const res = await USERS.insertMany([...SAMPLE_USERS.map(user => {
//             const _id = user._id ? new OBJECTID(user._id) : new OBJECTID();

//             return { ...user, _id }
//         })]);

//         return res;
//     }

//     // console.clear();
//     // console.log(createMany());
// })();
