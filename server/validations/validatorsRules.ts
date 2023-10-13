import validation from './middleware'
import { Request,Response } from 'express'

const signupUserValidator = (req: Request, res: Response, next: any) => {
    const registerUser = {
        nickname: 'required|string',
        email: 'required|isUniqueemail:User,email',
        password: 'required|string',
        confirmPassword:'required|string'
    }
    validation(registerUser, req, res, next)
}

export {
    signupUserValidator
}