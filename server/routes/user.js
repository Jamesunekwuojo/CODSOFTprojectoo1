import express from 'express';
import {signup_post, signin_post,  signout, sendOTP, resetPassword}  from '../controllers/userController.js';

import { protectAuth } from '../middleware/authMiddleware.js';


// import {User} from '../models/userModel.js';

const router = express.Router();

router.post('/signup', signup_post );
router.post('/signin', signin_post);
router.get('/profile')
router.post('/signout', signout);

router.post("/users/forgot-password", sendOTP);

router.post("/users/reset-password", resetPassword)


export default router;





