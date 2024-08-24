import express from 'express';
import {signup_post, signin_post}  from '../controllers/userController.js';


// import {User} from '../models/userModel.js';

const router = express.Router();

router.post('/signup', signup_post );
router.post('/signin', signin_post);



export default router;





