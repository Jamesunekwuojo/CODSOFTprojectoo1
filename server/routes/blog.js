import express from "express";
import { CreateBlog, GetEmployerblogs  } from "../controllers/blogController.js";
// import {authentication} from "../middleware/authMiddleware.js"



const router = express.Router();


router.post('/createblog',  CreateBlog );
router.get('/getblogs:byemail', GetEmployerblogs );


export default router;
