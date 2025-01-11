import mongoose from "mongoose";


const subscribeSchema = new mongoose.Schema({
    email: { 
        type: String,
    }
})