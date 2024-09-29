import {Job} from "../models/jobModel.js";

export const CreateJob = async (req, res) => {
    try {

        const {JobTitle, JobLocation, JobType, MinimumSalary, MaximumSalary, ApplicationDeadline, EmployerEmail, JobDescription  } = req.body;

        console.log("Job data received successfully," , req.body)

        // creating job by instanciating new object

        const newJob = new Job({JobTitle, JobLocation, JobType, MinimumSalary, MaximumSalary, ApplicationDeadline, EmployerEmail, JobDescription

        })

        await newJob.save();

        console.log("Job created successfully")

        return res.status(201).json({message:"Job created successfully", Job:newJob});




        
    } catch (error) {

        console.log("Error creating job:", error.message);

        res.status(500).json({error:error.message})
        
    }
}


export const GetEmployerjobs = async (req, res) => {
    try {

        const email = req.email;

        const jobs = await Job.find({EmployerEmail:email})

        if(jobs.length ===0) {
            return res.status(404).json({message:"No Jobs found for this email"});
        }

        return res.status(200).json({Jobs:jobs})



    } catch (error) {

        console.log("Error fetching job", error);
        return res.status(500).json({error: error.message})

    }
}


// to get jobs by their category
export const  GetJobsByCategory = async(req, res) => {
  try {

    const {JobCategory} = req.query;
    if (!JobCategory) {
        res.status(400).json({message:'Jobs category is required'})
    }

    const jobs = await Job.find({JobCategory:JobCategory});

    if (jobs.lenght ===0) {
        res.status(404).json({message:`No jobs found for this ${JobCategory}`});
 
    }

    return res.status(200).json(jobs);


  } catch (error) {
    console.log("Error fetching job", error);
    return res.status(500).json({error:error.message});

  }
}

// To get all jobs in database
export const GetJobs = async(req, res) => {
    try {

        const jobs = await Job.find();
        console.log("processing request ....")

        if (jobs.length === 0) {
            res.status(400).json({message:"No Jobs found "})
        }

        res.status(200).json({message:"job successfully fetched", jobs})
        
    } catch (error) {

        console.log("Error fetching job", error);
        return res.status(500).json({error:error.message});
        
        
    }
}
