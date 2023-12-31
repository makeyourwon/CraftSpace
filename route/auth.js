import User from "../model/user.js";
import 'dotenv/config'
import {Router} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { signUp } from "../controllers/auth.js";

const {SECRET ='secret'} = process.env

const router = Router()
router.post('/signup', async (req, res) => {
    try{
        console.log(req.body.pswd)
        const newUser = await signUp(req)
        console.log(req.body.pswd)
        console.log(newUser)
        res.status(200).json({
            newUser: newUser
        })
    }catch(error){
        res.status(400).json({
            error: `${error}`
        })
    }
    

})

export default router