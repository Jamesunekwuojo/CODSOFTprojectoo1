import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    JobTitle: {type:String},
    JobLocation : {type:String},
    JobType: {type:String},
    MinimumSalary: {type:Number},
    MaximumSalary :{type:Number},
    ApplicationDeadline: {type:String},
    JobDescription: {type:String},
    
});

const  JobModel = mongoose.model("Job", jobSchema);

export  {JobModel as Job}
