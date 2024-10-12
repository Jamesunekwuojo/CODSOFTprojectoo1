import { error } from "console";
import {Blog} from "../models/blogModel.js";
// import multer from "multer";
// import path from "path";
// import { fileURLToPath } from "url";

import cloudinary from 'cloudinary';

// Configure Cloudinary (add this part at the top or in a separate file)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ...

export const CreateBlog = async (req, res) => {
    try {
        // Check if the user is authenticated
        if (!req.user || req.body.authorEmail !== req.user.email) {
            return res.status(400).json({ error: "Please use signup email for creating the blog" });
        }

        // Check if the file is provided
        if (!req.files || !req.files.profilePhoto) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Upload the file to Cloudinary
        const result = await cloudinary.v2.uploader.upload(req.files.profilePhoto.tempFilePath, {
            // folder: 'blog_uploads', // Optional: specify a folder in Cloudinary
            use_filename: true,
            unique_filename: false,
        });

        // Create profilePhoto object
        const profilePhoto = {
            url: result.secure_url,
            filename: result.public_id,
            mimetype: req.files.profilePhoto.mimetype,
            size: req.files.profilePhoto.size,
        };

        // Get blog details from request body
        const { authorName, authorEmail, authorPhone, articleTitle, articleDescript, articleLink } = req.body;

        // Create a new blog instance
        const newBlog = new Blog({
            authorName,
            authorEmail,
            authorPhone,
            articleTitle,
            articleDescript,
            articleLink,
            profilePhoto,
        });

        // Save the blog to the database
        await newBlog.save();
        return res.status(201).json({ message: "Blog registered successfully", blog: newBlog });

    } catch (error) {
        console.log("Error saving blog:", error);
        return res.status(500).json({ error: error.message });
    }
};



export const GetEmployerblogs = async (req, res) => {

  try{

    const email = req.user.email;
   
    const blogs= await Blog.find({authorEmail:email});

    if(blogs.length ===0){
      return res.status(404).json({message:"No blogs found for this email"});
    }


    return res.status(200).json({Blogs: blogs})


  } catch(error){

    console.log("Error fetchong blog", error);
    return res.status(500).json({error:"Internal server error"});

  }

  


}

