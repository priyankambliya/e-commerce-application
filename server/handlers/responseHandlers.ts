import { Response } from "express"

const successHandler = ( res:Response,data:any,statusCode:number ) => {
    return res.status(statusCode).json(data)
}

const errorHandler = ( res:Response,error:any,statusCode:number ) => {
    return res.status(statusCode).json(error)
}

export {
    successHandler,
    errorHandler
}