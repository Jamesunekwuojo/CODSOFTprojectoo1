import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    JobTitle: {type:String},
    JobLocation : {type:String},
    JobType: {type:String, required:true},
    MinimumSalary: {type:String},
    MaximumSalary :{type:String},
    ApplicationDeadline: {type:String},
    JobCategory:{type:String},
    JobDescription: {type:String},
    EmployerEmail : {type:String}
    
});

const  JobModel = mongoose.model("Job", jobSchema);

export  {JobModel as Job}
