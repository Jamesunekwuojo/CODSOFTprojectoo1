import './dbconnection.js'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from "path";
dotenv.config();
import { fileURLToPath } from 'url';
import userRoutes from './routes/user.js'
import blogRoutes from "./routes/blog.js";


const app = express()



app.use(cors());
app.use(express.json())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.use("/api", userRoutes);
app.use ("/api", blogRoutes);




app.listen (process.env.PORT, () =>{

    console.log(`Server is running on port ${process.env.PORT}`);


});
