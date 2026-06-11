import { AppError } from "../utils/AppError.js";
import { addNewTaskValidation } from "../validations/task.validation.js";
import taskModel from "../models/task.model.js";
export const addNewTaskService = async (data) => {
  const { title, project, description, status, priority } = data;
  const taskData = {
    title,
    project,
    description,
    status,
    priority,
  };
  const { error, value } = await addNewTaskValidation.validate(taskData);

  if (error) throw new AppError(error.details[0].message, 422);

  const task = taskModel.create({
    title,
    project,
    description,
    status,
    priority,
  });
  return task;
};

export const getAllTasksService = async () => {
  const getAllTasks = await taskModel.find();

  return getAllTasks;
};
export const getSingleTaskService = async (id) => {
  const singleTask = await taskModel.findById(id)

  return singleTask;
};

export const updateTaskService = async (id, data) => {
    const {title, project, status, priority, description} = data
    const updatedData = {
        title, project, status, priority, description
    }
    const {error , value} = await addNewTaskValidation.validate(updatedData);
    if(error) throw new AppError(error.details[0].message, 422)

    const results = taskModel.findByIdAndUpdate(
         id,
        value,
        { returnDocument: 'after' }
    )

    return results;
}

export const deleteTaskService = async (id) => {
    const deletedTask = await taskModel.findByIdAndDelete(id);

    if (!deletedTask) {
        throw new AppError("Task Not Found", 404);
    }
    
    return deletedTask
}