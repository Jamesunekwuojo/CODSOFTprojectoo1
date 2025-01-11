


import express from "express";
import { subscribePost } from "../controllers/subscribeController.js";

const router = express.Router();

router.post("/subscribe", subscribePost);

export default router