import { Subscriber } from "../models/subscribeModel.js";

export const subscribePost = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    console.log("Please enter your email");

    res
      .status(400)
      .json({ sucess: false, messsage: "Please enter your email" });
  }

  try {
    // Check if email exist

    const emailExist = await Subscriber.findOne({ email });

    if (emailExist) {
      console.log("Email already in use");


      res.status(400).json({error:"Email already in use"});

      const subscribe = new Subscriber({email})

      await subscribe.save;

      const transporter = nodemailer.createTransport({
        service:"gmail",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS

        }
      });

      // mail options
      const mailOptions = {
        from: process.env.SUBSCRIBE_USER,

        subject: 'JOBHUB SUBSCRIPTION',
        text: `Thanks for subscribing to JobHub, you will receive updates on new jobs`,
      }

      await transporter.sendMail({mailOptions});

      console.log(" Email subscribed successfully");

      return res.status(200).json({message: "Subscribed successfully"})



    }
  } catch (error) {
    console.log(error);

    return res.status(500).json({sucess:false, error:error.message})
  }
};
