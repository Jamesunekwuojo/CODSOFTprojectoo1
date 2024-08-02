import {Blog} from "../models/blogModel.js"

export const CreateBlog = async(req, res) =>{

    try{

        const {authorName, authorEmail, authorPhone, websiteLink, articleTitle, articleDescript, date, readTime, articleLink} =req.body;

        const profilePhoto = {
        url: `public/images ${req.file.filename}`,

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

    



}