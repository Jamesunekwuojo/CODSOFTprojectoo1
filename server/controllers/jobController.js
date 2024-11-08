// jobController.js
import { Job } from "../models/jobModel.js";

export const CreateJob = async (req, res) => {
  try {
    const {
      JobTitle,
      JobLocation,
      JobType,
      MinimumSalary,
      MaximumSalary,
      ApplicationDeadline,
      EmployerEmail,
      JobDescription,
      JobCategory,
    } = req.body;

    console.log("Job data received successfully,", req.body);

    const newJob = new Job({
      JobTitle,
      JobLocation,
      JobType,
      MinimumSalary,
      MaximumSalary,
      ApplicationDeadline,
      EmployerEmail,
      JobDescription,
      JobCategory,
    });

    await newJob.save();

    console.log("Job created successfully");

    return res
      .status(201)
      .json({ message: "Job created successfully", Job: newJob });
  } catch (error) {
    console.log("Error creating job:", error.message);
    return res.status(500).json({ error: error.message });  // Added return
  }
};

export const GetEmployerjobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;
    const email = req.email;

    const jobs = await Job.find({ EmployerEmail: email })
      .skip(skip)
      .limit(limit);

    const totalJobs = await Job.countDocuments({ EmployerEmail: email });

    if (jobs.length === 0) {
      console.log("No jobs found for this email");
      return res.status(404).json({ message: "No Jobs found for this email" });  // Added return
    }

    return res.status(200).json({
      Jobs: jobs,
      currentPage: page,
      totalPages: Math.ceil(totalJobs / limit),  // Fixed totalJobs typo
      totalJobs: totalJobs,
    });
  } catch (error) {
    console.log("Error fetching job", error);
    return res.status(500).json({ error: error.message });  // Added return
  }
};

export const GetJobsByCategory = async (req, res) => {
  try {
    const { JobCategory } = req.query;
    if (!JobCategory) {
      return res.status(400).json({ message: "Jobs category is required" });  // Added return
    }

    const jobs = await Job.find({ JobCategory: JobCategory });

    if (jobs.length === 0) {  // Fixed typo 'lenght'
      return res
        .status(404)
        .json({ message: `No jobs found for this ${JobCategory}` });  // Added return
    }

    return res.status(200).json(jobs);
  } catch (error) {
    console.log("Error fetching job", error);
    return res.status(500).json({ error: error.message });  // Added return
  }
};

export const GetJobs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 6;
    const skip = (page - 1) * limit;

    const jobs = await Job.find().skip(skip).limit(limit);
    console.log("Processing request ....");

    const totalJobs = await Job.countDocuments();

    if (jobs.length === 0) {
      console.log("No jobs found");
      return res.status(400).json({ message: "No Jobs found" });  // Added return
    }

    return res.status(200).json({
      message: "Job successfully fetched",
      Jobs: jobs,
      currentPage: page,
      totalPages: Math.ceil(totalJobs / limit),
      totalJobs: totalJobs,
    });
  } catch (error) {
    console.log("Error fetching job", error);
    return res.status(500).json({ error: error.message });  // Added return
  }
};
