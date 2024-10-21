import { Blog } from "../models/blogModel.js";
import multer from "multer";
import cloudinary from "./cloudinary.js";

// Set up Multer to use memory storage (no need to save files locally)

// Setup Multer for memory storage (since you're using Cloudinary)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware to handle file upload
export const uploadProfilePhoto = (req, res, next) => {
  console.log("Multer middleware file upload starting");

  // Handle file upload with multer
  upload.single('profilePhoto')(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      console.log("Multer error:", err);
      return res.status(400).json({ error: err.message });
    } else if (err) {
      console.log("File upload error:", err);
      return res.status(500).json({ error: "File upload failed" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    console.log("File uploaded successfully:", req.file);
    next(); // Proceed to the next middleware
  });
};
  

// CreateBlog function
export const CreateBlog = async (req, res) => {
  try {
    // Verify Multer successfully uploaded the file
    if (!req.file) {
      return res.status(400).json({ error: "File is missing" });
    }

    // Upload the file to Cloudinary asynchronously
    const uploadToCloudinary = new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "profilepics", // Optional: folder for Cloudinary
          use_filename: true,
          unique_filename: false,
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
      uploadStream.end(req.file.buffer); // Pass the file buffer from multer
    });

    const result = await uploadToCloudinary;
    
    console.log("Cloudinary upload successful:", result);

    // Create a blog post after the Cloudinary upload is successful
    const { authorName, authorEmail, authorPhone, articleTitle, articleDescript, articleLink } = req.body;

    const newBlog = new Blog({
      authorName,
      authorEmail,
      authorPhone,
      articleTitle,
      articleDescript,
      articleLink,
      profilePhoto: {
        url: result.secure_url,
        filename: result.public_id,
        mimetype: req.file.mimetype,
        size: req.file.size,
      }
    });

    // Save the new blog to the database
    await newBlog.save();
    
    console.log("Blog created successfully");
    return res.status(201).json({
      message: "Blog registered successfully",
      blog: newBlog
    });

  } catch (error) {
    console.error("Error creating blog:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// Fetch blogs for an employer
export const GetEmployerblogs = async (req, res) => {
  try {
    const email = req.user.email;
    const blogs = await Blog.find({ authorEmail: email });

    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found for this email" });
    }

    return res.status(200).json({ blogs });
  } catch (error) {
    console.log("Error fetching blog", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
