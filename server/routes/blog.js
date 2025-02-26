import express from "express";
import { uploadProfilePhoto, CreateBlog, GetEmployerblogs, GetBlogs, UpdateBlog, DeleteBlog, getblogID, GetBlogByTime   } from "../controllers/blogController.js";

import { updateProfilepics } from "../middleware/updateprofile.js";

import { protectAuth } from "../middleware/authMiddleware.js";





const router = express.Router();

// Require auth for all blog routes

// router.use(protectAuth);
router.get('/blog/:id', getblogID)
router.get('/allBlogs', GetBlogs);
router.get("/blogs", GetBlogByTime)

router.put('/blog/:id',  protectAuth, updateProfilepics, UpdateBlog);

router.delete('/blog/:id', protectAuth,  DeleteBlog);

router.post( '/createblog', protectAuth, uploadProfilePhoto,   CreateBlog );

router.get('/blogs:byId', protectAuth, GetEmployerblogs );




export default router;
