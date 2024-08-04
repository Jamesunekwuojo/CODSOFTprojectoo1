import mongoose from "mongoose";





const blogSchema = new mongoose.Schema ({

    authorName:{type:String, required:true},
    authorEmail:{type:String, required:true, unique:true},
    authorPhone: {type:String, required:true},
    websiteLink: {type:String, required:true},

    articleTitle: {type:String, required:true},
    articleDescript: {type:String,  required:true},
    // date: {type:String, required:true},
    // readTime:{type:String, required:true},
    articleLink: {type:String, required:true},

    profilePhoto:{
        url: String,
        filename:String,
        mimetype:String,
        size:Number

    },

 











});

const blogModel = mongoose.model("Blog", blogSchema);

export {blogModel as Blog}