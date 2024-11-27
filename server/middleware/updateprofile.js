
import multer from "multer";
import cloudinary from "../controllers/cloudinary.js";

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const updateProfilepics = (req, res, next) => {
    console.log("Multer middleware file upload starting for updateProfilepics");
  
    // Handle file upload with multer
    upload.single('profilePhoto')(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        console.log("Multer error:", err);
        return res.status(400).json({ error: err.message });
      } else if (err) {
        console.log("File upload error:", err);
        return res.status(500).json({ error: "File upload failed" });
      }
  
      // If no file is uploaded, simply move to the next middleware
      if (!req.file) {
        console.log("No file uploaded, proceeding without updating profile photo...");
        return next();
      }
  
      console.log("File uploaded successfully:", req.file);
      next(); // Proceed to the next middleware
    });
  };
  