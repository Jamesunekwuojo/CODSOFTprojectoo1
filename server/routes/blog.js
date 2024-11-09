import express from "express";
import { uploadProfilePhoto, CreateBlog, GetEmployerblogs, GetBlogs, UpdateBlog, DeleteBlog  } from "../controllers/blogController.js";

import { protectAuth } from "../middleware/authMiddleware.js";



const router = express.Router();

// Require auth for all blog routes

// router.use(protectAuth);

router.get('/allBlogs', GetBlogs);

router.put('/api/blog/:id', uploadProfilePhoto, UpdateBlog);

router.delete('/api/blog/:id', DeleteBlog);

router.post( '/createblog', protectAuth, uploadProfilePhoto,   CreateBlog );

router.get('/blogs:byId', protectAuth, GetEmployerblogs );



export default router;
