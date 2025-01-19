import { User } from "../models/userModel.js";
import createToken from '../utilis/utilis.js';
import bcrypt from "bcrypt";

// User signup
export const signup_post = async (req, res) => {
    const { email, password, role } = req.body;

    try {
        // Signup user
        const user = await User.signup(email, password, role);

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
    const { email, password, role } = req.body;

    try {
        // Login user
        const user = await User.login( email, password, role);

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


// controller responsible for sendind OTP

export const sendOTP = async (req, res) => {
    const { email } = req.body;
  
    try {
  
      const otp = Math.floor(100000 + Math.random() * 900000).toString();
  
      console.log(`Generated OTP for ${email}: ${otp}`);
  
      const user = await User.findOne({ email });
  
      if(!user) {
        console.log("User not found")
        return res.status(404).json({ error: "User not found" });
      }
  
      user.otp = bcrypt.hashSync(otp, 10)
  
      user.otpExpiry = Date.now() + 10 * 60 * 1000;
  
      await user.save()
  
      await sendEmail(email, "Password Reset OTP", `Your OTP is ${otp}`);
      
      return res.status(200).json({message:"OTP sent successfully"})
  
      
  
  
    } catch (error) {
  
      console.error("Failed to send OTP:", error.message)
  
      return res.status(500).json({error: "Failed to send OTP"})
      
    }
  
    
  };
  
  // Controller responsible for Reseting password
  
  export const resetPassword = async(req, res) => {
    const {email,  otp, newPassword } = req.body;
    console.log(req.body)
  
  
    try {
  
      console.log(email)
  
      const user = await User.findOne({ email });
  
      if(!user) {
        console.log("User not found")
        return res.status(404).json({error: "User not found"})
      }
  
      // check OTP validity
      const isOtpValid = bcrypt.compareSync(otp, user.otp) && user.otpExpiry > Date.now();
  
      if(!isOtpValid){
        console.log("Invalid OTP")
        return res.status(400).json({error: "Invalid or expiry OTP"});
      }
  
      // update password
      // const  salt = await bcrypt.genSalt(10);
      user.password = newPassword
      user.otp = null;
      user.otpExpiry = null;
  
      await user.save()
  
      console.log(user)
  
      return res.status(200).json({message: "Password reset successfully"});
      
    } catch (error) {
      console.error("Failed to reset password:", error.message)
  
      return res.status(500).json({error: "Failed to reset password"});
  
      
      
    }
  }
