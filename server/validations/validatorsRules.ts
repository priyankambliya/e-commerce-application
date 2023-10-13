import validation from './middleware'
import { Request,Response } from 'express'

const signupUserValidator = (req: Request, res: Response, next: any) => {
    const signupUser = {
        nickname: 'required|string',
        email: 'required|isUniqueemail:User,email',
        password: 'required|string',
        confirmPassword:'required|string'
    }
    validation(signupUser, req, res, next)
}

const signinUserValidator = (req: Request, res: Response, next: any) => {
    const signinUser = {
        email: 'required|email',
        password: 'required|string'
    }
    validation(signinUser, req, res, next)
}

export {
    signupUserValidator,
    signinUserValidator
}