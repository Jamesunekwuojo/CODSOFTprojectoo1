import { User } from "../models/UserModel.js";
import createToken from '../utilis/utilis.js';

// User signup
export const signup_post = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Signup user
        const user = await User.signup(name, email, password, role);

        // Create token
        const token = createToken(user._id);

        // Send token as HTTP-only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // Set 'secure' flag in production
            maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
        });

        res.status(200).json({ user });
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
};

// User signin
export const signin_post = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        // Login user
        const user = await User.login(name, email, password, role);

        console.log("User created successfully", user);


        // Create token
        const token = createToken(user._id);
        console.log("Token successfully created", token)

        // Send token as HTTP-only cookie
        res.cookie('jwt', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 24 * 60 * 60 * 1000, // 1 day expiration
        });

        res.status(200).json({ user });
    } catch (error) {
        console.log( "Error signing in", error.message)
        return res.status(400).json({ error: error.message });

    }
};

// User logout - clear the JWT cookie
export const signout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 }); // Clear the cookie
    res.status(200).json({ message: 'User logged out successfully' });
};

// Rest of user controllers functionality here
