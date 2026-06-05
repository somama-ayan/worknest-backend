import { AppError } from "../utils/AppError.js";
import { addNewTaskValidation } from "../validations/task.validation.js";
import taskModel from "../models/task.model.js";
export const addNewTaskService = async(data) => {

    const { title , project , description, status , priority} = data;
    const taskData = {
        title, project, description, status, priority
    }
    const {error, value } = await addNewTaskValidation.validate(taskData);

    if(error) throw new AppError(error.details[0].message, 422)

    const task = taskModel.create({
        title,
        project, 
        description,
        status,
        priority
    })
    return task
}

export const getAllTasksService = async () => {
    const getAllTasks = await taskModel.find();

    return getAllTasks;
}