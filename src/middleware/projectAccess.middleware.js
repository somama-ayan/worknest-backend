import Project from "../models/project.model.js";
import { AppError } from "../utils/AppError.js";

export const isProjectMember = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const projectId = req.params.projectId;

    const project = await Project.findById(projectId);
    if (!project) throw new AppError("Project not Found.", 404);

    const isMember = project.member.some(
      (member) => member.toString() === userId.toString(),
    );
    if (!isMember) {
      throw new AppError("Access Denied", 403);
    }

    req.project = project; // optional but useful
    next();
  } catch (error) {
    next(error);
  }
};
