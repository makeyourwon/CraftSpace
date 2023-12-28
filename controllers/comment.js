import Comment from "../model/comment.js";

const getComment =  () =>{
    return Comment.find({})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const createComment =  (comment) => {
    return Comment.insertOne(comment)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
    
}