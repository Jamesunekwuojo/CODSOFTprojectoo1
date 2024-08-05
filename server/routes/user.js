import express from 'express';
import {CreateUser}  from '../controllers/userSignup.js';


// import {User} from '../models/userModel.js';

const router = express.Router();

router.post('/signup', CreateUser );



export default router;





