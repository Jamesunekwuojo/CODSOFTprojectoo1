import jwt from "jsonwebtoken";
import { User } from '../models/userModel.js';
import 'dotenv/config';

export const protectAuth = async (req, res, next) => {
    // To verify user is authenticated
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Authorization token required' });
    }

    const token = authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Token missing from authorization header' });
    }

    try {
        const { _id } = jwt.verify(token, process.env.JWT_KEY);

        // Fetch the user with the email
        req.user = await User.findOne({ _id }).select('_id email'); // Add email here

        next();

    } catch (error) {
        console.log(error);
        return res.status(401).json({ error: 'Request not authorized' });
    }
};
