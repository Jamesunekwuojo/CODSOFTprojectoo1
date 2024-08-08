import {Blog} from "../models/blogModel.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import {authentication} from "../middleware/authentication.js"


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Configure Multer storage and file naming
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, 'uploads')); // Ensure this folder exists or create it
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

  
  // Filter to only accept certain file types (e.g., images)
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Error: File upload only supports the following filetypes - " + filetypes));
};

  
  // Initialize upload middleware with limits
  
const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 }, // 5MB file size limit
    fileFilter: fileFilter
}).single('profilePhoto'); // Use 'single' for a single file field
  

export const CreateBlog = (req, res) =>{

    upload(req, res, async (err) =>{
        if (err) {
           console.log("Multer error", err)
            return res.status(400).json({error:err.message});
        }


        try{


          console.log(req.user, ':req.user');

            const {authorName, authorEmail, authorPhone,  articleTitle, articleDescript,   articleLink} =req.body;

            

            // if(!authorEmail === req.user.email) {

            //   console.log("Please use your signup email")
            //   return res.status(400).json({error:"Please use ur profile email"});
              
            // }

            if (!req.file) {
              return res.status(400).json({ error: "No file uploaded" });
            }
    
            const profilePhoto = {
            url: `/uploads ${req.file.filename}`,
    
            filename: req.file.originalname,
            mimetype:req.file.mimetype,
            size:req.file.size
    
    
            }

            console.log("form data received successfully", {...req.body, profilePhoto})


    
            
    
            const newBlog = new Blog({
            authorName, authorEmail, authorPhone,  articleTitle, articleDescript,  articleLink,
            profilePhoto 
            });
    
            await newBlog.save();
            console.log("Blog registered successfully");
    
            return res.status(201).json({ message: "Blog registered successfully", blog: newBlog });

    
    
        } catch(error) {

          console.log("Error saving blog:", error);
    
            res.status(500).json({error: error.message})
    
    
    
        }
    });
    

    
}


export const GetEmployerblogs = async (req, res) => {

  try{

    const email = req.user.email;
   
    const blogs= await Blog.find({authorEmail:email});

    if(blogs.length ===0){
      return res.status(404).json({message:"No blogs found for this email"});
    }


    return res.status(200).json(blogs)


  } catch(error){

    console.log("Error fetchong blog", error);
    return res.status(500).json({error:"Internal server error"});

  }

  


}