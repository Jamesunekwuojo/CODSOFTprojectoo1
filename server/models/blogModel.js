import mongoose from "mongoose";

import multer from "multer";
import path from path;




// Multer set up
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')

    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
});


const upload = multer({ storage: storage});



const blogSchema = new mongoose.Schema ({

    authorName:{type:String, required:true},
    authorEmail:{type:String, required:true, unique:true},
    authorPhone: {type:String, required:true},
    websiteLink: {type:String, required:true},

    profilePhoto:










});

const blogModel = mongoose.model("Blog", blogSchema);

export {blogModel as Blog}