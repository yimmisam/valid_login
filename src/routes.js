import express from "express";

import redirectRoutes from "./components/redirect/redirect.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

router.use("/", redirectRoutes);

export default router;
