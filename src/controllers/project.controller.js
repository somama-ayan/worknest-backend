import { addNewProjectService } from "../services/project.service.js"



export const addNewProjectController = async (req, res, next) => {
    try{
        // console.log(req)
        const userId = req.user.id
        const project = await addNewProjectService(req.body, userId);

        return res.status(200).json({
      success: true,
      message: "Project Created successfully",
    });

    }catch(err)
    {
        next(err)
    }
}