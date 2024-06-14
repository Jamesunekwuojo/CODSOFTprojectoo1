import {User} from "../models/userModel.js";
import bcrypt from "bcrypt";

export const CreateUser = async (req, res) =>{

    const{name, email, password, role} = req.body;
    console.log("Request received successfully", req.body);

    try{
        const user= await User.findOne({email});

        if(user){
            console.log("User already exist ");
            return res.status(400).json({message:"User already exist"})
        }

        const hashPassword = await bcrypt.hash(password, 10); 

        const newUser = new User({
            name,
            email,
            password:hashPassword,
            role
        }) 

        await newUser.save();
        console.log("User Registered Successfully");

        return res.status(201).json({message:"User registerd successfully"});



    }catch(error){
        console.log("Error registering user", error);
        return res.status(500).json({message:"Error registering User"})
        

    }




}