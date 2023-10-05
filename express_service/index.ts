import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (_, res) => {
    res.send("hello rash")
});

app.listen(PORT, () => console.log(`listening on \n\n http://localhost:${PORT}/ \n`))
