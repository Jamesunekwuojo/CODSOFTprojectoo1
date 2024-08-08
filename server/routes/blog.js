import express from "express";
import { CreateBlog, GetEmployerblogs  } from "../controllers/userBlog.js";
import {authentication} from "../middleware/authentication.js"



const router = express.Router();


router.post('/createblog', authentication, CreateBlog );
router.get('/getblogs:byemail', authentication, GetEmployerblogs );


export default router;
