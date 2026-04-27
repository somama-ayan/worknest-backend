import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'
import { connectDb } from './config/db.js'
dotenv.config()

const PORT = process.env.PORT || 5000



 
app.listen(PORT, () => {
      connectDb()
      console.log(`Server Listening on PORT ---: ${PORT}`);
    });
