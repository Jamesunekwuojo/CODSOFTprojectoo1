import jwt from "jsonwebtoken";
import { User } from '../models/userModel.js';

export const protectAuth = async (req, res, next) => {
    let token;
    console.log('Incoming request to:', req.originalUrl);
    console.log('Cookies:', req.cookies);
    console.log(process.env.JWT_KEY);



    // Check if the token is in the cookies
    if (req.cookies.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        // Verify the token
        const { userId } = jwt.verify(token, process.env.JWT_KEY);

        // Fetch the user with the userId
        req.user = await User.findById(userId).select('_id email');

        if (req.user) {
            req.email = req.user.email;
            next()

        } else {
            return res.status(404).json({error:"user not found"})
        }

       

    } catch (error) {
        console.log(error);

        // Handle specific JWT errors
        if (error.name === 'TokenExpiredError') {

            res.clearCookie('jwt')
            return res.status(401).json({ error: 'Token expired' });

        } else if (error.name === 'JsonWebTokenError') {

            res.clearCookie('jwt')
            return res.status(401).json({ error: 'Token malformed' });
            
        } else {
            return res.status(401).json({ error: 'Request not authorized' });
        }
    }

    
};
