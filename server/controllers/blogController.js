import { Blog } from "../models/blogModel.js";
import multer from "multer";
import cloudinary from "./cloudinary.js";

// Set up Multer to use memory storage (no need to save files locally)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Middleware to handle single file upload
export const uploadProfilePhoto = upload.single('profilePhoto');

// CreateBlog function
export const CreateBlog = async (req, res) => {
    try {
        // Check if the user is authenticated
        if (!req.user || req.body.authorEmail !== req.user.email) {
            return res.status(400).json({ error: "Please use signup email for creating the blog" });
        }

        // Check if the file is provided
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }

        // Upload the file to Cloudinary
        const result = await cloudinary.uploader.upload_stream(
            {
                folder: 'profilepics', // Optional: specify a folder in Cloudinary
                use_filename: true,
                unique_filename: false,
            },
            (error, result) => {
                if (error) {
                    throw new Error('Cloudinary upload failed');
                }
                return result;
            }
        );

        // Stream file data to Cloudinary
        const uploadStream = cloudinary.uploader.upload_stream;
        uploadStream(req.file.buffer);

        // Create profilePhoto object
        const profilePhoto = {
            url: result.secure_url,
            filename: result.public_id,
            mimetype: req.file.mimetype,
            size: req.file.size,
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
