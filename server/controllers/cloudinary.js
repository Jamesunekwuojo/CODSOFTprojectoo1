import {v2 as cloudinary} from 'cloudinary';

// Configure Cloudinary (add this part at the top or in a separate file)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;