import express from 'express';
import { CreateJob, GetEmployerjobs , GetJobsByCategory, GetJobs} from '../controllers/jobController.js';
import  { protectAuth } from '../middleware/authMiddleware.js';



const router = express.Router();

//auth middleware



//routes
router.post('/createjob', protectAuth, CreateJob);
router.get('/jobsbyId', protectAuth, GetEmployerjobs);
router.get('/jobsbyCategory', GetJobsByCategory);
router.get('/allJobs', GetJobs);



export default router