import express from "express";

import {
	loginUserHandler,
	registerUserHandler,
	verifyUserdHandler,
} from "./auth.controller.js";

const router = express.Router();
router.post("/register", registerUserHandler);
router.post("/login", loginUserHandler);
router.post("/verify", verifyUserdHandler);

export default router;
