import jwt from "jsonwebtoken";
import { User } from '../models/userModel.js';
import 'dotenv/config';

export const protectAuth = async (req, res, next) => {
    // To verify user is authenticated via token in cookies
    const token = req.cookies.jwt; // Get the token from the cookies

    if (!token) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    try {
        // Verify the token
        const { userId } = jwt.verify(token, process.env.JWT_KEY);

        // Fetch the user with the userId
        req.user = await User.findOne({ _id: userId }).select('_id email'); // Add email to the user object

        // If the user is found, proceed
        next();

    } catch (error) {
        console.log(error);

        // Handle specific JWT errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Token expired' });
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: 'Token malformed' });
        } else {
            return res.status(401).json({ error: 'Request not authorized' });
        }
    }
};
