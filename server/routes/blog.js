import express from "express";
import { CreateBlog, GetEmployerblogs  } from "../controllers/userBlog.js";



const router = express.Router();


router.post('/createblog', CreateBlog );

router.get('/getblogs:byemail', GetEmployerblogs );


export default router;
