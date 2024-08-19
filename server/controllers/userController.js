import {User} from "../models/userModel.js";

import {createToken} from '../utilis/utilis.js'

export const signup_post = async (req, res) =>{

    const{name, email, password, role} = req.body;
    console.log("Request received successfully", req.body);

    try{

        const user = await User.signup(name, email, password, role);

        console.log("User signed up succesfully");

        const token = createToken(user._id);

        res.status(200).json( {user, token});

        console.log("Token created successfully", token);
        


    }catch(error){
        console.log("Error registering user", error);
        return res.status(400).json({error:error.message})
        

    }




}

export const login_post =async(req, res) => {
    const {name, email, password, role} = req.body;

    console.log("Data received succesfully")

    try {

        const user = await User.login(name, email, password, role);

        const token = createToken(user._id);

        res.status(200).json("user created successfully")
        return res.status(200).json(user)



    } catch(error) {

        console.log("Error logging user in");

        res.status(200).json({error: error.message});

    } 

} 