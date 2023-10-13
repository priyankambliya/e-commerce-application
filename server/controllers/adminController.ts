import { Request, Response } from "express";

import * as bcrypt from 'bcrypt'
import * as Jwt from 'jsonwebtoken'

import Admin from "../models/Admin.model";

import { SECRET_KEY } from '../security/config.json'

import { errorHandler, successHandler } from "../handlers/responseHandlers";

const adminSignup = async (req:Request,res:Response) => {
    try {
        const {
            name,
            email,
            password
        } = req.body
    
        const hasedPassword = await bcrypt.hash(password,10)
    
        await Admin.create({
            name,
            email,
            password:hasedPassword
        })

        successHandler(res,{message:"admin registered"},201)
    } catch (error) {
        errorHandler(res,error,401)
    }
}

const adminSignin = async (req:Request,res:Response) => {
    try {
        const {
            email,
            password,
            type
        } = req.body
    
        const isAdmin:any = await Admin.findOne({email})
    
        const isEqualPassword = await bcrypt.compare(password,isAdmin?.password)
        if(!isEqualPassword) throw "password miss match"

        const payload = {
            email,
            type
        }
        const token = Jwt.sign(payload,SECRET_KEY)

        successHandler(res,{message:"user login",token},200)
    } catch (error) {
        errorHandler(res,{error},401)
    }
}

export {
    adminSignup,
    adminSignin
}