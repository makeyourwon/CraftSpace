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



export {
    getUserInfo,
    signUp}
