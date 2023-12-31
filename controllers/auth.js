import User from "../model/user.js";
import 'dotenv/config'
import {Router} from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const {SECRET ='secret'} = process.env

async function signUp(req){
    req.body.pswd = await bcrypt.hash(req.body.pswd, 10)
    return User.create(req.body)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

async function signIn(req){
    const inputUser = await User.findOne({username:req.body.username})
    console.log(inputUser)
    return inputUser
}



//test with database. won't be used.
function getUserInfo(req){
    const userInfo = User.findOne({username: req.body.username})

    return userInfo
    .then(response => {
        return response
    })
    .catch( error => {
        console.log("error")
        throw error
    })

}

const isloggedIn = async (req, res, next) =>{
    try{
        if (req.headers.authorization){
            const token = req.headers.authorization.split(" ")[1]; // Assuming "Bearer TOKEN_HERE"

            if(token){
                const payload = jwt.verify(token, 'secret')
                if (payload){
                    req.user = payload
                    next()
                }else{
                    res.status(400).json({
                        message: "Token verification failed"
                    })
                }
            }else{
                res.status(400).json({
                    message: "malformed auth header"
                })
            }
        }else{
            res.status(400).json({
                message: "No authorization header"
            })
        }
    }
    catch(error){
        throw error
    }
}



export {
    getUserInfo,
    signUp,
    signIn,
    isloggedIn
}
