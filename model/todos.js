import mongoose from 'mongoose'
import Post from './post.js'

//Todo list is unique to each post.
const todoSchema = mongoose.Schema({

    todoList: [{type: String, required: true}],
    // postId: {type: mongoose.Schema.Types.ObjectId, ref:'Post'},


},{
    timestamps:true
})

const Todos = mongoose.model('Todos', todoSchema)

export default Todos