import jwt from "jsonwebtoken";
import { User } from '../models/userModel.js';
import 'dotenv/config'; // Ensure your environment variables are loaded

const JWTkey = process.env.JWT_key;

export const createToken = (id) => {
    return jwt.sign(id,  JWTkey, {expiresIn:'3d'})
}

// export const authentication = async (req, res, next) => {
//     const token = req.header("Authorization")?.replace('Bearer ', '').trim(); // Trim any extra spaces

//     if (!token) {
//         console.log("No token provided");
//         return res.status(401).send({ error: 'No token provided' });
//     }

//     try {
//         const decoded = jwt.verify(token, JWTkey);

//         const user = await User.findOne({ _id: decoded._id });

//         if (!user) {
//             return res.status(401).send({ error: "User not found, please authenticate" });
//         }

//         req.user = user;
//         next(); // Move to the next middleware or route handler
//     } catch (error) {
//         return res.status(401).send({ error: "Please authenticate" });
//     }
// };
