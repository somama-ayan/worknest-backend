import express from "express";
import {
  addNewProjectController,
  projectsController,
  viewSingleProjectController,
  updateProjectController,
  deleteProjectController,
} from "../controllers/project.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
const router = express.Router();

router.post(
  "/addNewProject",
  authMiddleware,
  roleMiddleware("admin"),
  addNewProjectController,
);
router.get("/getAll", authMiddleware, projectsController);
router.get("/:id", authMiddleware, viewSingleProjectController);
router.patch(
  "/:id/updateProject",
  authMiddleware,
  roleMiddleware("admin"),
  updateProjectController,
);
router.delete(
  "/:id/deleteProject",
  authMiddleware,
  roleMiddleware("admin"),
  deleteProjectController,
);

export default router;
