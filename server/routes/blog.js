import express from "express";
import { CreateBlog } from "../controllers/userBlog.js";


const router = express.Router();


router.post('/createblog', CreateBlog );


export default router;
