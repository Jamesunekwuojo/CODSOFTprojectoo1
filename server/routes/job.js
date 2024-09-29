import express from 'express';
import { CreateJob, GetEmployerjobs , GetJobsByCategory, GetJobs} from '../controllers/jobController.js';
import  { protectAuth } from '../middleware/authMiddleware.js';



const router = express.Router();

//auth middleware



//routes
router.get('/allJobs', GetJobs);
router.post('/createjob', protectAuth, CreateJob);
router.get('/jobsbyId', protectAuth, GetEmployerjobs);
router.get('/jobsbyCategory', GetJobsByCategory);




export default router