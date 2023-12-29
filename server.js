import express from 'express'
import cors from 'cors'
import userRouter from './route/user.js'
import postRouter from './route/post.js'
import commentRouter from './route/comment.js'
import todoRouter from './route/todos.js'

import 'dotenv/config.js'
// TODO: Import database
import './config/database.js'


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


app.use('/', userRouter)
app.use('/', postRouter)
app.use('/', commentRouter)
app.use('/', todoRouter)


app.listen(PORT, function(){
    console.log(`App is running on server ${PORT}`)
})
