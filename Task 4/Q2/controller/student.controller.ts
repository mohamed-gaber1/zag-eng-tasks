const Student=require('../models/student.model')
import type { Request, Response } from "express";

const getAllStudent=async(req:Request,res:Response)=>{
    const students=await Student.find({},{'__v':0})
    return res.status(200).json({
        status:"ok",
        data:students
    })
}
const getStudentById = async (req: Request, res: Response) => {
    const student = await Student.findById(req.params.id);
    if (!student) {
        return res.status(404).json({
            status: "fail",
            message: "student not found"
        });
    }
    return res.status(200).json({
        status: "ok",
        data: student
    });
};
const creatStudent=async(req:Request,res:Response)=>{
    const newstudent = await Student.create(req.body);
    if(!newstudent.name||!newstudent.email){
        return res.status(400).json({
            status:"fail",
            message:"name and email is required"
        })
    }
    return res.status(201).json({
        status:"ok",
        data:newstudent
    })
}
const updateStudent=async(req:Request,res:Response)=>{
    const updatedStudent=await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!updatedStudent){
        return res.status(400).json({
            status:"fail",
            message:"this id not found"
        })
    }
    return res.status(200).json({
        status:"ok",
        data:updatedStudent
    })
}
const deletestudent=async(req:Request,res:Response)=>{
    const deletedstudent=await Student.findByIdAndDelete(req.params.id);
    if(!deletedstudent){
        return res.status(404).json({
                    status:"fail",
                    message:"this id not found"
                })
    }
    res.status(200).json({
                status:"success",
                data:null
            });
};
module.exports={
    getAllStudent,
    getStudentById,
    creatStudent,
    updateStudent,
    deletestudent
}
