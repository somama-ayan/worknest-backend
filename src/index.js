import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'
dotenv.config()

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error:", err));

app.listen(5000, () => {
    console.log(`Server Listening on PORT: ${PORT}`)
})