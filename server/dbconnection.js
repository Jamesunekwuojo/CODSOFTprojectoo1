import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

async function connectDB(){

    try{
        await mongoose.connect(process.env.dbURL);
        console.log('Database connected successfully')

    }catch{

        console.log(err, "Error connecting to Database")

    }
}

connectDB()