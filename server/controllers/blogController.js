import { Blog } from "../models/blogModel.js";
import multer from "multer";
import cloudinary from "./cloudinary.js";

// Set up Multer to use memory storage (no need to save files locally)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware to handle single file upload
export const uploadProfilePhoto = upload.single("profilePhoto");

// CreateBlog function
export const CreateBlog = async (req, res) => {
  try {
    // Check if the user is authenticated
    if (!req.user || req.body.authorEmail !== req.user.email) {
      console.log("Unauthorized email, please use signup email");
      return res
        .status(400)
        .json({ error: "Please use signup email for creating the blog" });
    }

    // Check if the file is provided
    if (!req.file) {
      console.log("No file uploaded");
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload the file to Cloudinary using upload_stream
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "profilepics", // Optional: specify a folder in Cloudinary
        use_filename: true,
        unique_filename: false,
      },
      (error, result) => {
        if (error) {
          console.log("Cloudinary upload failed", error);
          return res.status(500).json({ error: "Cloudinary upload failed" });
        }

        // Continue with blog creation after successful upload
        const profilePhoto = {
          url: result.secure_url,
          filename: result.public_id,
          mimetype: req.file.mimetype,
          size: req.file.size,
        };

        // Get blog details from request body
        const {
          authorName,
          authorEmail,
          authorPhone,
          articleTitle,
          articleDescript,
          articleLink,
        } = req.body;

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
        newBlog
          .save()
          .then(() => {
            console.log("Blog created successfully");
            return res
              .status(201)
              .json({ message: "Blog registered successfully", blog: newBlog });
          })
          .catch((err) => {
            console.log("Error saving blog to the database", err);
            return res.status(500).json({ error: "Internal server error" });
          });
      }
    );

    // Write the file buffer to the Cloudinary upload stream
    uploadStream.end(req.file.buffer);
  } catch (error) {
    console.log("Error creating blog:", error);
    return res.status(500).json({ error: error.message });
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
