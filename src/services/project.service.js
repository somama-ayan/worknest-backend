import projectModel from "../models/project.model.js";
import { addNewProjectValidation } from "../validations/project.validation.js";
export const addNewProjectService = async (data, userID) => {
  const { name, project_key, category,
     description, target_completion_date } = data;
    
    const projectData = {
        name,project_key,category,
        description,target_completion_date,
    };
    const { error, value } = await addNewProjectValidation.validate(projectData);
    // check if body data is valid or not
    if (error) throw new AppError(error.details[0].message, 422);

    //  create user.
        const project = projectModel.create({
            name,
            project_key,
            category,
            description,
            target_completion_date,
            owner: userID

        })
  return project;
};

export const getAllProjectsService = async () => {
    const allProjects = await projectModel.find();

    return allProjects;
}

export const getSingleProjectsService = async (data) => {
    const singleProject = await projectModel.findById(data)
    
    return singleProject;
}