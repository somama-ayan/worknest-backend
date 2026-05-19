import express from "express"
import { addNewProjectController } from "../controllers/project.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/addNewProject", authMiddleware,addNewProjectController)


export default router;
