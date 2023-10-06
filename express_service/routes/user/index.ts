import express from "express";
import { EPXRESS_USER_CONTROLLER } from "../../modules";

const router = express.Router();

const user_controller = new EPXRESS_USER_CONTROLLER();

router.get('/', user_controller.get_one_user);

export default router;
