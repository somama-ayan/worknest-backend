import { addNewTaskService ,
   getAllTasksService,
    getSingleTaskService,
    updateTaskService,
    deleteTaskService
  } from "../services/task.service.js";

export const addNewTaskController = async (req, res, next) => {

    try {
            const newTask = await addNewTaskService(req.body);
    res.status(201).json({
        success: true,
        message: "Task Created Successfully",
        data: newTask
    });
  } catch (err) {
    next(err);
  }
};

export const getAllTaskController = async (req, res , next) => {
  try {
    
    const allTasks = await getAllTasksService();

    res.status(200).json({
      success: true,
      data: allTasks
    })

  } catch (err) {
    next(err)
  }
}

export const getSingleTaskController = async (req, res , next) => {

  try {

    const {id} = req.params
    const singleTask = await getSingleTaskService(id)

    res.status(200).json({
      success: true,
      message: "Task Fetched successfully.",
      data: singleTask
    })

  } catch (err) {
    next(err)
  }


}

export const updateTaskController = async (req, res , next) => {
  try {
    const {id} = req.params;

    const updatedTask = await updateTaskService(id, req.body);

    res.status(200).json({
      success: true,
      message: "Task Updated Successfully",
      data: updatedTask
    })

  } catch (err) {
    next(err)
  }
}

export const deleteTaskController = async (req, res , next) => {

  try {
    const {id } = req.params;
    const data = await deleteTaskService(id)

    res.status(200).json({
      success: true,
      message: "Task was Deleted Successfully." 
    })
    
  } catch (error) {
    next(err)
  }
}