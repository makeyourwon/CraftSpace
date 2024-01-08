import mongoose from 'mongoose'
import  User from './user.js'
import Comment from './comment.js'
import Todos from './todos.js'


const postSchema = mongoose.Schema({
    postTitle: { type: String, required: true },
    postContent: { type: String, required: true } ,
    images:[{type: String}],
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
    likes: [{type:String, unique:true}],
    commentId:[ {type: mongoose.Schema.Types.ObjectId, ref:'Comment'}], //multiple comments
    todoId: {type: mongoose.Schema.Types.ObjectId, ref:'Todos'} //unique todo list

}, {
    timestamps: true
  })

const Post = mongoose.model('Post', postSchema)

export default Post