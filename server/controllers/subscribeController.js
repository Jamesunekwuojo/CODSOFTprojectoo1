import { Subscriber } from "../models/subscribeModel.js";
import nodemailer from "nodemailer";

export const subscribePost = async (req, res) => {
  const { email } = req.body;
  console.log("Subscribe Objects from frontend", req.body);

  if (!email) {
    console.log("Please enter your email");
    return res.status(400).json({ success: false, message: "Please enter your email" });
  }

  try {
    // Check if email exists
    const emailExist = await Subscriber.findOne({ email });

    if (emailExist) {
      console.log("Email already in use");
      return res.status(400).json({ error: "Email already in use" });
    }

    // Create new subscriber
    const subscribe = new Subscriber({ email });
    await subscribe.save();

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Mail options
    const mailOptions = {
      from: process.env.SUBSCRIBE_USER,
      to: email, // Send email to the subscriber
      subject: "JOBHUB SUBSCRIPTION",
      text: "Thanks for subscribing to JobHub, you will receive updates on new jobs",
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("Email subscribed successfully");
    return res.status(200).json({ message: "Subscribed successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};
