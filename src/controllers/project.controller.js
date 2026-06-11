import {
  addNewProjectService,
  getAllProjectsService,
  getSingleProjectsService,
  updateProjectService,
  deleteProjectService
} from "../services/project.service.js";

export const addNewProjectController = async (req, res, next) => {
  try {
    // console.log(req)
    const userId = req.user.id;
    const project = await addNewProjectService(req.body, userId);

    return res.status(200).json({
      success: true,
      message: "Project Created successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const projectsController = async (req, res, next) => {
  try {
    const getAllProjects = await getAllProjectsService();

    return res.status(200).json({
      success: true,
      data: getAllProjects,
      message: "Project Fetched successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const viewSingleProjectController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const getSingleProject = await getSingleProjectsService(id);

    if (!getSingleProject) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: getSingleProject,
      message: "Project Fetched successfully",
    });
  } catch (err) {
    next(err);
  }
};

export const updateProjectController = async (req, res , next) => {
  
  try {
    const { id } = req.params
    const updatedProject = await updateProjectService(id, req.body)

    return res.status(200).json({
      success: true,
      message: "Project Updated successfully",
      data: updatedProject
    });
  } catch (err) {
    next(err);
  }
}

export const deleteProjectController = async (req, res , next) =>{
  try {
    const {id} = req.params
    const data = await deleteProjectService(id);

    res.status(200).json({
      success: true,
      message: "Project Delteted Successfully."
    })

  } catch (err) {
    next(err)
  }
}