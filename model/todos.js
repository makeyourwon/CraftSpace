import mongoose from 'mongoose'

//Todo list is unique to each post.
const todoSchema = mongoose.Schema({
    // todoTitle: {type: String, required: true},
    todoList: {type: String, required: true},
    postId: {type: mongoose.Schema.Types.ObjectId, ref:'Post'},
    // userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'}

})

const Todos = mongoose.model('todos', todoSchema)

export default Todos