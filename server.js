import express from 'express'
import cors from 'cors'
import allRouter from './route/user.js'
import 'dotenv/config.js'
// TODO: Import database
import './config/database.js'


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())


app.use('/', allRouter)


app.listen(PORT, function(){
    console.log(`App is running on server ${PORT}`)
})
