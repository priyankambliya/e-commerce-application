import express,{Express} from 'express'
import chalk from 'chalk'

import { data } from './security/data'
import router from './routes/index'
const app : Express = express()

app.use(router)

app.listen(data.PORT,()=>{
    console.log(chalk.yellowBright(`SERVER LISTNING ON PORT:${data.PORT}`))
})