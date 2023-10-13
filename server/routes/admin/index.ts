import express from 'express'

import {
    ADMIN_ROUTES
} from '../../security/allRoutes.json'

import { 
    adminSignup,
    adminSignin
} from "../../controllers/adminController"

const router = express.Router()

router.post(ADMIN_ROUTES.ADMIN_SIGNUP,adminSignup)
router.post(ADMIN_ROUTES.ADMIN_SIGNIN,adminSignin)

export default router