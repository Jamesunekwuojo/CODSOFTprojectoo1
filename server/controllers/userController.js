import { User } from "../models/userModel.js";
import createToken from '../utilis/utilis.js';

// User signup
export const signup_post = async (req, res) => {
    const { name, email, password, role } = req.body;
    console.log("Request received successfully", req.body);

    try {
        // Signup user
        const user = await User.signup(name, email, password, role);
        console.log("User signed up successfully");

        // Create token and send it as a cookie
        const token = createToken( user._id); 
        console.log("token created successfully", token)
   

        // Send response with user details
        res.status(200).json({ user, token });

        console.log("Token created and sent via cookie");

    } catch (error) {
        console.log("Error registering user", error);
        return res.status(400).json({ error: error.message });
    }
};

// User signin
export const signin_post = async (req, res) => {
    const { name,email, password, role } = req.body;
    console.log("Data received successfully");

    try {
        // Login user
        const user = await User.login(name, email, password, role);
        console.log("User logged in successfully");

        // Create token and send it as a cookie
        const token = createToken(user._id); // No need to return token here, it's sent via cookie
        console.log(token)

        // Send response with user details
        return res.status(200).json({ user, token });

    } catch (error) {
        console.log(error);
        return res.status(400).json({ error: error.message });
    }
};

// Get user profile
export const get_user = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);

        if (user) {
            res.json(user);
        } else {
            return res.status(404).json({ error: 'User not found' });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Server error' });
    }
};

// User logout - delete the JWT cookie
export const signout = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 }); // Set the cookie expiry to 1ms to remove it
    res.status(200).json({ message: 'User logged out successfully' });
};
