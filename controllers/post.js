
import Post from "../model/post.js";

const getPost = () =>{
    return Post.find({})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const createPost =  (post) => {
    return Post.insertMany(post)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
    
}

const updatePost = (id, updateinfo) => {
    return Post.findByIdAndUpdate(id, updateinfo, {new:true})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const deletePost = (id) => {
    return Post.findByIdAndDelete(id)
    .then(response => {
        return response
    })
    .catch(error =>{
        throw error
    })
}

export {
    getPost,
    updatePost,
    createPost,
    deletePost
}