import jwt from "jsonwebtoken";
import {User} from '../models/userModel.js';

import 'dotenv'


const JWTkey= process.env.JWT_key;

export const authentication = async(req, res, next) => {

    const token = req.header("AuthoriZation")?.replace('Bearer', '');


    if(!token) {
        return res.status(401).send({error:'No token provided'});
    
        console.log("No token provided");
    
    }


    try{
        const decoded = jwt.verify(token, JWTkey);

        const user = await User.findOne({_id:decoded._id})


        if(!user){
            throw new Error();
        }

        req.user = user;

    } catch(error) {

        res.send(401).send({error: "Please authenticate"});


    }







}
