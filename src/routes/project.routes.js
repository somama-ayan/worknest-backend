import express from "express"
import { addNewProjectController , projectsController, viewSingleProjectController} from "../controllers/project.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/addNewProject", authMiddleware,addNewProjectController)
router.get("/getAll", authMiddleware,projectsController)
router.get("/:id", authMiddleware,viewSingleProjectController)


export default router;
