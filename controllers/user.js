
import { response } from "express";
import User from "../model/user.js";





const getUser = () =>{
    return User.find({})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}


const createUser = (user) => {
    return User.insertMany(user)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}


const updateUser = (id, updateinfo) => {
    return User.findByIdAndUpdate(id, updateinfo, {new:true})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const deleteUser = (id) => {
    return User.findByIdAndDelete(id)
    .then(response => {
        return response
    })
    .catch(error =>{
        throw error
    })
}


export {

    getUser,
    createUser,
    updateUser,
    deleteUser
}