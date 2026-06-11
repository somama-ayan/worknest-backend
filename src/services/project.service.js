import projectModel from "../models/project.model.js";
import { AppError } from "../utils/AppError.js";
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

    //  create project.
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

export const updateProjectService = async (id, data) =>{
    
    const { name, project_key, category,
     description, target_completion_date } = data;
    
    const updatedData = {
        name,project_key,category,
        description,target_completion_date,
    };

    const {error , value } = await addNewProjectValidation.validate(updatedData);

    if(error) throw new AppError(error.details[0].message, 422)

//     const result = await projectModel.updateOne({
//         _id: id
//     },
//     
//     value
// )
const result = await projectModel.findByIdAndUpdate(
  id,
  value,
  { returnDocument: 'after' }
);
 if (result.matchedCount === 0) {
    throw new AppError("Project not found", 404);
  }

return result; 

}

export const deleteProjectService = async (id) => {
     const deletedTask = await projectModel.findByIdAndDelete(id);
    
        if (!deletedTask) {
            throw new AppError("Task Not Found", 404);
        }
        
        return deletedTask
}