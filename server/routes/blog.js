import express from "express";
import { CreateBlog, GetEmployerblogs  } from "../controllers/blogController.js";

import { protectAuth } from "../middleware/authMiddleware.js";



const router = express.Router();

// Require auth for all blog routes

router.use(protectAuth);

router.post('/createblog',  CreateBlog );
router.get('/blogs:byId', GetEmployerblogs );


export default router;
