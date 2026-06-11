import express from "express"
import {
    addNewTaskController ,
    deleteTaskController,
    getAllTaskController, 
    getSingleTaskController,
    updateTaskController
} from "../controllers/task.controller.js"

const router = express.Router()


router.post("/addNewTask", addNewTaskController)
router.get("/getAllTasks", getAllTaskController)
router.get("/:id", getSingleTaskController)
router.patch("/:id/updateTask", updateTaskController)
router.delete("/:id/deleteTask", deleteTaskController)



export default router;