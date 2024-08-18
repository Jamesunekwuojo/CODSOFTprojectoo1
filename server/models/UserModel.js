import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    name:{type:String, required:true},

    email:{type:String, required:true, unique:true},
    
    password:{type:String, required:true, unique:true},

    role:{type:String, enum:['employer', 'candidate'], required:true},


})


//using mongoose hook to create a static sign up method

userSchema.pre( 'save', async function(next){

    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);


    next();

})



const UserModel = mongoose.model('User', userSchema);

export{UserModel as User};

