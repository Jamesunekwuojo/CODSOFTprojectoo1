import express from 'express';
import { CreateJob } from '../controllers/jobController.js';
import  { protectAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

//auth middleware
router.use(protectAuth)


//routes
router.post('/createjob', CreateJob);
router.get('/displaybyId');
router.get('/jobs:byId',)

export default router