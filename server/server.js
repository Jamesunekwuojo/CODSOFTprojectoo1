import './dbconnection.js'
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config();

import userRoutes from './routes/user.js'


const app = express()

app.use(cors());
app.use(express.json())

app.use("/api", userRoutes);



app.listen (process.env.PORT, () =>{

    console.log(`Server is running on port ${process.env.PORT}`);


});
