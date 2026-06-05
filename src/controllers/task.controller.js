import { addNewTaskService , getAllTasksService} from "../services/task.service.js";

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
