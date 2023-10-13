import { Request, Response } from "express";
import { errorHandler } from "../../handlers/responseHandlers";

const customSignupUserValidator = (req: Request, res: Response, next: any) => {
    try {
        const nickname = req.body.nickname.trim()
        const email = req.body.email.trim()
        const password = req.body.password.trim()
        const confirmPassword = req.body.confirmPassword.trim()

        const check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        const isEmail = check.test(email)

        if (nickname.length == 0) throw "you can not insert space as a nickname"
        if(!isEmail) throw "Invalid form of email"
        if (email.length == 0) throw "you can not insert space as a email"
        if (password.length == 0) throw "you can not insert space as a password"

        if (password !== confirmPassword) throw "password miss matched"

        req.body = {
            nickname,
            email,
            password
        }
        next()
    } catch (error) {
        errorHandler(res, {error}, 401)
    }
}

export {
    customSignupUserValidator
}