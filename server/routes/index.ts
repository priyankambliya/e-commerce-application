import express from 'express'

import {
    COMMON_ROUTES
} from '../security/allRoutes.json'
import {
    getuser
} from '../controllers/commonController'
 
const router = express.Router()

router.get(COMMON_ROUTES.DEFAULT_ROUTE,getuser)

export default router