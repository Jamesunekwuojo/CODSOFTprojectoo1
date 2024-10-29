import express from "express";
import { uploadProfilePhoto, CreateBlog, GetEmployerblogs, GetBlogs  } from "../controllers/blogController.js";

import { protectAuth } from "../middleware/authMiddleware.js";



const router = express.Router();

// Require auth for all blog routes

// router.use(protectAuth);

router.get('/blogs:allBlogs', GetBlogs)
router.post( '/createblog', protectAuth, uploadProfilePhoto,   CreateBlog );

router.get('/blogs:byId', protectAuth, GetEmployerblogs );



export default router;
