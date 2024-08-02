import express from 'express';
import {CreateUser}  from '../controllers/userSignup.js';
import { CreateBlog } from '../controllers/userBlog.js';

// import {User} from '../models/userModel.js';

const router = express.Router();

router.post('/signup', CreateUser );
router.post("/createblog", CreateBlog );

export default router;





