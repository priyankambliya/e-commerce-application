import mongoose from "mongoose"
import chalk from "chalk"

import {MONGO_DB} from '../security/config.json'

mongoose.connect(MONGO_DB.LOCAL_MONGODB_URI)
.then(()=>console.log(chalk.yellowBright(`DATABASE CONNECTION ESTABLISED`)))
.catch((error)=>console.log(error))