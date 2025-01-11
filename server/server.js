import './dbconnection.js'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import path from "path";
dotenv.config();
// import { fileURLToPath } from 'url';
import userRoutes from './routes/user.js'
import blogRoutes from "./routes/blog.js";
import jobRoutes from "./routes/job.js";

import subscribeRoutes from "./routes/subscribe.js"


import cookieParser from 'cookie-parser';

const app = express()



app.use(cors(
    {
    origin: 'http://localhost:5173',  // my frontend URL
    credentials: true,  // Allow credentials (cookies)
    }
));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Serve static files from the 'uploads' directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API  responding to client side requests and responses
app.use("/api", jobRoutes);
app.use("/api", userRoutes);
app.use ("/api", blogRoutes);
app.use("/api", subscribeRoutes)





app.listen (process.env.PORT, () =>{

    console.log(`Server is running on port ${process.env.PORT}`);


});
