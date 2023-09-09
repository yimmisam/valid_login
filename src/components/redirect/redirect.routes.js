import express from "express";

import { getUrlRedirectHandler } from "./redirect.controller.js";

const router = express.Router();

router.get("/:url", getUrlRedirectHandler);

export default router;
