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

// Employer blog fetch to 
export const GetEmployerblogs = async (req, res) => {
  try {

    const page = parseInt(req.query.page) || 1;

    const limit = parseInt(req.query.limit) || 6;

    const skip =  (page -1 ) * limit;
    const email = req.user.email;
    const blogs = await Blog.find({ authorEmail: email }).skip(skip).limit(limit);
    const totalBlogs = await Blog.countDocuments({ authorEmail: email });

    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found for this email" });
    }

    console.log("employer blog successfully fetched");

    return res.status(200).json({ Blogs:blogs, currentPage:page, totalPages:Math.ceil(totalBlogs / limit), totalBlogs:totalBlogs});
    
  } catch (error) {
    console.log("Error fetching blog", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};



// To get all blog in database
export const GetBlogs = async (req, res) => {
  try {


    const page = parseInt(req.query.page) || 1; // Default to page 1 if no query provided
    const limit = parseInt(req.query.limit) || 6; // Default limit of 10 blogs per page
    const skip = (page - 1) * limit;

    const blogs = await Blog.find().skip(skip).limit(limit);
    console.log("processing request in controller...")
    const totalBlogs = await Blog.countDocuments();

    if(blogs.length === 0) {
      console.log("No blog found for this email")
      res.status(204).json({message:"No blogs found"})
    }

    console.log("Blog successfully fetched")
    return res.status(200).json({ Blogs:blogs, currentPage: page,
      totalPages: Math.ceil(totalBlogs / limit),
      totalBlogs: totalBlogs });
   

    // res.status(200).json({message:"Blog successfully fetched"})
   

  } catch(error) {
    console.log("Error fetching blogs", error);
    return res.status(500).json({error:error.message})

  }
}


// UpdateBlog function
export const UpdateBlog = async (req, res) => {
  try {
    const { id } = req.params; // Blog ID from URL
    const { authorName, authorEmail, authorPhone, articleTitle, articleDescript, articleLink } = req.body;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Optionally, update the profile photo if a new one is uploaded
    if (req.file) {
      const uploadToCloudinary = new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: "profilepics", 
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
        uploadStream.end(req.file.buffer);
      });

      const result = await uploadToCloudinary;
      blog.profilePhoto = {
        url: result.secure_url,
        filename: result.public_id,
        mimetype: req.file.mimetype,
        size: req.file.size,
      };
    }

    blog.authorName = authorName || blog.authorName;
    blog.authorEmail = authorEmail || blog.authorEmail;
    blog.authorPhone = authorPhone || blog.authorPhone;
    blog.articleTitle = articleTitle || blog.articleTitle;
    blog.articleDescript = articleDescript || blog.articleDescript;
    blog.articleLink = articleLink || blog.articleLink;

    await blog.save();

    return res.status(200).json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    console.error("Error updating blog:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
