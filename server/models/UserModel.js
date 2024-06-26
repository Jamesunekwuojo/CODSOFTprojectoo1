import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},

    email:{type:String, required:true, unique:true},
    
    password:{type:String, required:true, unique:true},

    role:{type:String, enum:['employer', 'candidate'], required:true},


})



const UserModel = mongoose.model('User', userSchema);

export{UserModel as User};

