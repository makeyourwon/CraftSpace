
import Comment from "../model/comment.js";

const getComment = () =>{
    return Comment.find({})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const getCommentById = (id) =>{
    return Comment.findById(id)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const createComment =  (comment) => {
    return Comment.insertMany(comment)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
    
}

const updateComment = (id, updateinfo) => {
    return Comment.findByIdAndUpdate(id, updateinfo, {new:true})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const deleteComment = (id) => {
    return Comment.findByIdAndDelete(id)
    .then(response => {
        return response
    })
    .catch(error =>{
        throw error
    })
}

export {
    getComment,
    updateComment,
    createComment,
    deleteComment,
    getCommentById
}