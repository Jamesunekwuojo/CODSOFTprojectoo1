import mongoose from 'mongoose';
import bcrypt from 'bcrypt'
import { resolvePath } from 'react-router-dom';

const userSchema = new mongoose.Schema({

    name:{type:String, required:true},

    email:{type:String, required:true, unique:true},
    
    password:{type:String, required:true, unique:true},

    role:{type:String, enum:['employer', 'candidate'], required:true},


})


//using mongoose hook to create a static sign up method

userSchema.pre( 'save', async function(next){

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);


    next();

});

// static method for sign up
userSchema.statics.signup = async function(name, email, password, role) {

    const exist = await this.findOne({email})

    if(exist) {
        throw new Error('Email already in use')
    }

    const user = await this.create({name, email, password, role})

    return user
}


// static method for logging in 

userSchema.statics.login = async function (name, email, password, role) {
    const user = await this.findOne({email});

    if(user) {

        const auth = await bcrypt.compare(password, user.password)

        if(user.name !==name){
            throw Error('Incorrect name')
        }

        if (user.role !==role) {
            throw Error ('Please enter the correct role')
        }

        if(auth) {
            return user
        } 

        throw Error("Incorrect password")

    }

    throw Error('User not found, Incorrect email');



    
}


const UserModel = mongoose.model('User', userSchema);

export{UserModel as User};

