import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv";
// import dotenv

dotenv.config();

// Configure Cloudinary (add this part at the top or in a separate file)
cloudinary.config({
  cloud_name: 'dmymhpr2l',
  api_key: '235949984431665',
  api_secret:'L_CjxATXrEsbRg7isFgtabfdo7Q'
  
});

export default cloudinary;
