import express from "express";
import { EPXRESS_URL_CONTROLLER } from "../../modules";

const router = express.Router();

const url_controller = new EPXRESS_URL_CONTROLLER();

router.get('/:short_link', url_controller.redirect_to_url.bind(url_controller));

export default router;
