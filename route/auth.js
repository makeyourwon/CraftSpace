import User from "../model/user.js";
import 'dotenv/config'
import {Router} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { signUp, signIn } from "../controllers/auth.js";

const {SECRET ='secret'} = process.env

const router = Router()
router.post('/signup', async (req, res) => {
    try{
        const newUser = await signUp(req)
        res.status(200).json({
            newUser: newUser
        })
    }catch(error){
        res.status(400).json({
            error: `${error}`
        })
    }
})


router.post('/login', async (req,res) => {
    try{
        const userInput = await signIn(req)
        if (userInput){
            const result = await bcrypt.compare(req.body.pswd, userInput.pswd)
            if (result){
                const token = jwt.sign({username: userInput.username},SECRET)
                res.json({token})
            }else{
                res.status(400).json({
                    error: "error",
                    message: "Password doesn't match."
                })
            }
        }else{
            res.status(400).json({
                error: "error",
                message: "User doesn't exist."
            })
        }
    }catch(error){
        res.status(400).json({
            error: `${error}`
        })
    }
})
export default router