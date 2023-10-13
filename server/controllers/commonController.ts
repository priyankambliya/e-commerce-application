import { Request, Response } from "express";
import * as bcrypt from 'bcrypt'
import * as Jwt from 'jsonwebtoken'

import { errorHandler, successHandler } from "../handlers/responseHandlers";
import User from "../models/User.model";

import {data} from '../security/data'

const getuser = async (req: Request, res: Response) => {
    const users = await User.find() 
    successHandler(res, users, 200)
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

        successHandler(res, { message: "created" }, 201)
    } catch (error: any) {
        console.log(error.message);
        errorHandler(res, error, 401)
    }
}

const signinUser = async (req: Request, res: Response) => {
    const {
        email,
        password
    } = req.body

    try {
        const user:any = await User.findOne({ email })
        const isEqualPassword = await bcrypt.compare(password,user?.password)

        if(!user) throw "signup first"
        if(!isEqualPassword) throw "password miss match"

        const token = await Jwt.sign({payload:email},data.SECRET_KEY)

        successHandler(res, { message: "created",token }, 201)
    } catch (error: any) {
        console.log(error.message);
        errorHandler(res, error, 401)
    }
}

export {
    getuser,
    signupUser,
    signinUser
}