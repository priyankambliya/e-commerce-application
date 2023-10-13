import { Request, Response } from "express";
import * as bcrypt from 'bcrypt'

import { errorHandler, successHandler } from "../handlers/responseHandlers";
import User from "../models/User.model";

const getuser = (req: Request, res: Response) => {
    successHandler(res, { message: "hello from server side" }, 200)
}

const signupUser = async (req: Request, res: Response) => {
    const {
        nickname,
        email,
        password
    } = req.body

    try {
        const hasedPassword = await bcrypt.hash(password, 10)

        await User.create({
            nickname,
            email,
            password: hasedPassword
        })

        successHandler(res, { message: "Created" }, 201)
    } catch (error: any) {
        console.log(error.message);
        errorHandler(res, error, 401)
    }
}

export {
    getuser,
    signupUser
}