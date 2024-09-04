import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    JobTitle: {type:String},
    JobLocation : {type:String},
    JobType: {type:String},
    MinimumSalary: {type:String},
    MaximumSalary :{},
    ApplicationDeadline: {},
    JobDescription: {},
    
});

const  JobModel = mongoose.model("job", jobSchema);

export default JobModel;