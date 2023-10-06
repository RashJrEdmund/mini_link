import express, { Application, Response } from "express";
import cors, { CorsOptions } from "cors";
import { url_router } from "../../routes";

export default async (app: Application) => {
    const cors_options: CorsOptions = {
        origin: "*",
    }

    app.use(cors(cors_options));
    app.use(express.json());

    app.use("/r", url_router);

    app.get('/', (_, res: Response) => {
        res.json("welcome to app services");
    });
};
