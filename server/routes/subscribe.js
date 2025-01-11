


import express from "express";
import { subscribePost } from "../controllers/subscribeController";

const router = express.Router();

router.post("/subscribe", subscribePost);

export default router