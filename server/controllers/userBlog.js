import {Blog} from "../models/blogModel.js"



// Configure Multer storage and file naming
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images'); // Ensure this folder exists or create it
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
            return res.status(400).json({error:err.message});
        }


        try{

            const {authorName, authorEmail, authorPhone, websiteLink, articleTitle, articleDescript, date, readTime, articleLink} =req.body;
    
            const profilePhoto = {
            url: `../uploads ${req.file.filename}`,
    
            filename: req.file.originalname,
            mimetype:req.file.mimetype,
            size:req.file.size
    
    
            }
    
            
    
            const newBlog = new Blog({
            authorName, authorEmail, authorPhone, websiteLink, articleTitle, articleDescript, date, readTime, articleLink,
            profilePhoto 
            });
    
            await newBlog.save();
    
            res.status (201).json(newBlog)
    
    
        } catch(error) {
    
            res.status(500).json({error: error.message})
    
    
    
        }
    });
    

    

    



}