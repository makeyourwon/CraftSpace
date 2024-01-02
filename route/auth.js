import User from "../model/user.js";
import 'dotenv/config'
import {Router} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { signUp, signIn } from "../controllers/auth.js";
import path from 'path'

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

router.get('/login', (req,res) =>{
    try{
        res.json({message:"sign in page"})
        // console.log('dldldldldl')
        // res.sendFile(path.join(__dirname, './logInPage', 'login.html'))

        
    }catch(error){
        res.status(404).json({message:"route not found"})
    }
})

router.post('/login', async (req,res) => {
    try{
        const userInput = await signIn(req)
        if (userInput){
            // console.log(userInput)
            // console.log('userinputid',userInput._id.toString())
            // console.log(req.body.pswd)
            const result = await bcrypt.compare(req.body.pswd, userInput.pswd)

            if (result){
                // const token = jwt.sign({username: userInput.username},SECRET)
                const token = jwt.sign({id: userInput._id.toString()},SECRET)
                
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