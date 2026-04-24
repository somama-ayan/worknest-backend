import dotenv from 'dotenv'
import app from './app.js'
import mongoose from 'mongoose'
dotenv.config()

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () => {
      console.log(`Server Listening on PORT ---: ${PORT}`);
    });

  } catch (err) {
    console.error("Mongo error:", err);
    process.exit(1); // stop app if DB fails
  }
};

startServer();