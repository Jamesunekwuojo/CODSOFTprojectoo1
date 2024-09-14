import {Job} from "../models/jobModel.js";

export const CreateJob = async (req, res) => {
    try {

        const {JobTitle, JobLocation, JobType, MinimumSalary, MaximumSalary, ApplicationDeadline, JobDescription  } = req.body;

        console.log("Job data received successfully," , ...req.body)

        // creating job by instanciating new object

        const newJob = new Job({JobTitle, JobLocation, JobType, MinimumSalary, MaximumSalary, ApplicationDeadline, JobDescription

        })

        await newJob.save();

        console.log("Job created successfully")

        return res.status(201).json({message:"Job created successfully", Job:newJob});




        
    } catch (error) {

        console.log("Error creating blog:", error);

        res.status(500).json({error:error.message})
        
    }
}