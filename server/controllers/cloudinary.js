import cloudinary from 'cloudinary';
import dotenv from "dotenv";

dotenv.config();

// Configure Cloudinary (add this part at the top or in a separate file)
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;