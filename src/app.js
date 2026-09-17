import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import helmet from "helmet"



import authRoutes from "./routes/auth.routes.js"
import { errorHandler } from "./middleware/error.middleware.js"
const app = express();

// for haproxy , 
app.set('trust proxy', 1)

app.use(express.json({limit: "10kb"}));
app.use(helmet());
app.use(cors({
  origin: "http://worknest-frontend-work-nest.app-crc.testing",
  // origin: process.env.CLIENT_URL,
  credentials: true
}));
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
    max: 100
}));

app.use("/api/v1/auth", authRoutes);

app.use(errorHandler)

export default app;
