import express from 'express'

import {
    COMMON_ROUTES
} from '../security/allRoutes.json'   // ==================> SECUER DATA

import {
    getuser,
    signupUser
} from '../controllers/commonController'   // ==================> COMMON CONTROLLER 

import {
    signupUserValidator
} from '../validations/validatorsRules'    // ==================> VALIDATORS

import {
    customSignupUserValidator
} from '../validations/customValidators/userValidators'    // ==================> CUSTOM VALIDATORS

const router = express.Router()

router.get(COMMON_ROUTES.DEFAULT_ROUTE, getuser)
router.post(COMMON_ROUTES.USER_SIGNUP, signupUserValidator, customSignupUserValidator, signupUser)

export default router