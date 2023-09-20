import express from "express";

import authRoutes from "./components/auth/auth.routes.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

router.use("/auth", authRoutes);

export default router;
