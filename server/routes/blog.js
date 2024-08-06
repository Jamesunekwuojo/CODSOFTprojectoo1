import express from "express";
import { CreateBlog, Getblogs } from "../controllers/userBlog.js";



const router = express.Router();


router.post('/createblog', CreateBlog );

router.get('getblogs', Getblogs);


export default router;
