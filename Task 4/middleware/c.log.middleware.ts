import type { Request, Response,NextFunction } from "express";
const logger=(req:Request,res:Response,next:NextFunction)=>{
    const myDate= new Date().toString();
    console.log(`[${myDate}] ${req.method} ${req.originalUrl}`)
    next();
}
module.exports=logger;
