import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import helmet from "helmet"

import authRoutes from "./routes/auth.routes.js"
import { errorHandler } from "./middleware/error.middleware.js"
const app = express();

app.use(express.json({limit: "10kb"}));
app.use(helmet());
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
    max: 100
}));

app.use("/api/v1/auth", authRoutes);

app.use(errorHandler)

export default app;