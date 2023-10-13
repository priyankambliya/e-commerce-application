import express from 'express'

import {
    COMMON_ROUTES
} from '../security/allRoutes.json'   // ==================> SECUER DATA

import {
    getuser,
    signupUser,
    signinUser,
    userDetails
} from '../controllers/commonController'   // ==================> COMMON CONTROLLER 

import {
    signupUserValidator,
    signinUserValidator
} from '../validations/validatorsRules'    // ==================> VALIDATORS

import {
    customSignupUserValidator
} from '../validations/customValidators/userValidators'    // ==================> CUSTOM VALIDATORS

import adminRouted from '../routes/admin/index'

const router = express.Router()

router.get(COMMON_ROUTES.DEFAULT_ROUTE,getuser)
router.post(COMMON_ROUTES.USER_SIGNUP,signupUserValidator,customSignupUserValidator,signupUser)
router.post(COMMON_ROUTES.USER_SIGNIN,signinUserValidator,signinUser)
router.get(COMMON_ROUTES.USER_DETAILS,userDetails)

router.use('/admin',adminRouted)

export default router