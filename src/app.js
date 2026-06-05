import express from "express"
import dotenv from "dotenv"
dotenv.config();  
import cors from "cors"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import helmet from "helmet"

import authRoutes from "./routes/auth.routes.js"
import projectRoutes from "./routes/project.routes.js"
import { errorHandler } from "./middleware/error.middleware.js"
const app = express();

app.use(express.json({limit: "10kb"}));
app.use(cookieParser());
app.use(helmet());
console.log("CLIENT_URL:", process.env.CLIENT_URL);
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
    max: 100
}));

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/projects", projectRoutes);

app.use(errorHandler)

export default app;