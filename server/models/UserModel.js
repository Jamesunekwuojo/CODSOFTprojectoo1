import mongoose from 'mongoose';

const userSchema = new mongoose.User({
    name:{type:String, required:true},

    email:{type:String, required:true, unique:true},
    
    password:{type:String, required:true, unique:true},

    role:{type:String, enum:['employer', 'candidate'], required:true},


})

const User = mongoose.model(userSchema);

// const UserModel = mongoose.model('User', userSchema);

// export{UserModel as User};

export {User};