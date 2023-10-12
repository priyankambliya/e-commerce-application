import { Request,Response } from "express";
import { successHandler } from "../handlers/responseHandlers";

const getuser = (req:Request,res:Response) => {
    successHandler(res,{message:"hello from server side"},200)
}

export {
    getuser
}