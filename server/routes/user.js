import express from 'express';
import {signup_post, signin_post,  signout}  from '../controllers/userController.js';

import { protectAuth } from '../middleware/authMiddleware.js';


// import {User} from '../models/userModel.js';

const router = express.Router();

router.post('/signup', signup_post );
router.post('/signin', signin_post);
router.get('/profile')
router.post('/signout', signout);


export default router;





