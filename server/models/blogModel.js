import mongoose from "mongoose";


const blogSchema = new mongoose.Schema ({

    authorName:{type:String},
    authorEmail:{type:String  },
    authorPhone: {type:String, },
    // websiteLink: {type:String, required:true

    articleTitle: {type:String, },
    articleDescript: {type:String,  required:true},
   
    articleLink: {type:String, },

    profilePhoto:{
        url: String,
        filename:String,
        mimetype:String,
        size:Number

    },

 




});

const blogModel = mongoose.model("Blog", blogSchema);

export {blogModel as Blog}