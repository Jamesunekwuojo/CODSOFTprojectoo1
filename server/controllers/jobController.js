import {Job} from "../models/jobModel.js";

export const CreateJob = async (req, res) => {
    try {

        const {JobTitle, JobLocation, JobType, MinimumSalary, MaximumSalary, ApplicationDeadline, EmployerEmail, JobDescription  } = req.body;

        console.log("Job data received successfully," , ...req.body)

        // creating job by instanciating new object

        const newJob = new Job({JobTitle, JobLocation, JobType, MinimumSalary, MaximumSalary, ApplicationDeadline, EmployerEmail, JobDescription

        })

        await newJob.save();

        console.log("Job created successfully")

        return res.status(201).json({message:"Job created successfully", Job:newJob});




        
    } catch (error) {

        console.log("Error creating job:", error);

        res.status(500).json({error:error.message})
        
    }
}


export const GetEmployerjobs = async (req, res) => {
    try {

        const email = req.user.email;

        const jobs = await Job.find({EmployerEmail:email})

        if(jobs.lenght ===0) {
            return res.status(404).json({message:"No Jobs found for this email"});
        }



    } catch (error) {

        console.log("Error fetching job", error);
        return res.status(500).json({error: "Internal server error"})

    }
}