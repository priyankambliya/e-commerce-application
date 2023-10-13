import './config/db'

import express,{Express} from 'express'
import cors from 'cors'
import chalk from 'chalk'

import { data } from './security/data'
import router from './routes/index'

const app : Express = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use(cors())

app.use(router)

app.listen(data.PORT,()=>{
    console.log(chalk.yellowBright(`SERVER LISTNING ON PORT:${data.PORT}`))
})