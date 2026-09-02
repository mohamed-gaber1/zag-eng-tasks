import type { Request, Response,NextFunction } from "express";
const creatValidation=(req:Request,res:Response,next:NextFunction)=>{
    const {title,description,status,dueDate}=req.body;
    if(!title){
        return res.status(400).json({
            status:"fail",
            message:"title is required"
        })
    }
    if(status!=="pending" && status!=="in-progress" && status!=="done"){
        return res.status(400).json({
            status:"fail",
            message:"status must be [\"pending\" or \"in-progress\" or \"done\"]"
        })
    }

    next();
}
module.exports=creatValidation;
