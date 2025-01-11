import { Subscriber } from "../models/subscribeModel";

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
    }
  } catch (error) {}
};
