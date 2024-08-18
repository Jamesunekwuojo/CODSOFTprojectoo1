import {User} from "../models/userModel.js";
import bcrypt from "bcrypt";

import {createToken} from '../utilis/utilis.js'

export const CreateUser = async (req, res) =>{

    const{name, email, password, role} = req.body;
    console.log("Request received successfully", req.body);

    try{

        const user = await User.signup(name, email, password, role);

        const token = createToken(user._id);
        res.status.json("Token created succesflly", {user, token});
        


    }catch(error){
        console.log("Error registering user", error);
        return res.status(500).json({message:"Error registering User"})
        

    }




}