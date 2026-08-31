const express=require('express');
import type { Request,Response } from "express";
const {
    getAll,
    getById,
    create,
    update,
    remove
} = require("../models/task.model");
const get_All=(req:Request,res:Response)=>{
    try{
        res.status(200).json({
            status:"success",
            data:getAll()
        })
    }catch(err:any){
        res.status(500).json({
            status:"error",
            message:err.message
        })
    }
}
const get_By_Id=(req:Request,res:Response)=>{
    try{
        const id = Number(req.params.id);
        const task = getById(id);

        res.status(200).json({
            status:"success",
            data:task
        })
    }catch(err:any){
        res.status(500).json({
            status:"error",
            message:err.message
        })
    }
}
const create_data=(req:Request,res:Response)=>{
    try{
        const {title}=req.body;
        const newTask=create(title)
        res.status(201).json({
            status:"success",
            data:newTask
        })
    }catch(err:any){
        res.status(500).json({
            status:"error",
            message:err.message
        })
    }
}
const update_data=(req:Request,res:Response)=>{
    try{
        const id = Number(req.params.id);
        const { title, completed } = req.body;
        const updatedTask=update(id,title,completed)
        res.status(200).json({
            status:"success",
            data:updatedTask
        })
    }catch(err:any){
        res.status(500).json({
            status:"error",
            message:err.message
        })
    }
}
const remove_data=(req:Request,res:Response)=>{
    try{
        const id=Number(req.params.id)
        const delTask=remove(id)
        res.status(204).json({
            status:"success",
            data:delTask
        })
    }catch(err:any){
        res.status(500).json({
            status:"error",
            message:err.message
        })
    }
}
export{get_All,get_By_Id,create_data,update_data,remove_data}