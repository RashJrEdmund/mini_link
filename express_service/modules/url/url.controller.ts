import { Request, RequestHandler, Response } from "express"
import EXPRESS_URL_SERVICE from "./url.service";

export default class EPXRESS_URL_CONTROLLER {
    redirect_to_url: RequestHandler = async (req: Request, res: Response) => {
        const { params } = req;

        try {
            const short_link = params.short_link;

            if (!short_link) return res.json({ message: "NO_URL_FOUND" });

            const { data, status, message } = await EXPRESS_URL_SERVICE.getByShortUrl(short_link);

            if (!data || status !== 200) return res.status(status).send(message);

            const original = data.original as string;

            console.log({ original })

            res.redirect(original);
        } catch (error) {
            res.json({ message: "AN_ERROR_OCCURED" });
        }
    }
}
