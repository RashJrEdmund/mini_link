import db from "../../db/index";

const Schema = db.Schema;

const urlSchema = new Schema(
    {
        _id: { type: String, required: true }, // plan to use uuid.v4() from the front_end and overwrite the _id property mongo
        user_id: { type: String, required: true },
        short_link: { type: String, required: true },
        original: { type: String, required: true },
        clicks: Number,
        status: String, // "Active" | "Inactive"
        alias: String,
        createdAt: String,
    },
    {
        timestamps: true
    }
);

const UrlSchema = db.model("urls", urlSchema);

export default UrlSchema;
