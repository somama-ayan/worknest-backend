import express from "express"
import {addNewTaskController ,getAllTaskController} from "../controllers/task.controller.js"

const router = express.Router()


router.post("/addNewTask", addNewTaskController)
router.get("/getAllTasks", getAllTaskController)


export default router;