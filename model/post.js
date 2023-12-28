import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    postTitle: { type: String, required: true },
    postContent: { type: String, required: true } ,
    userId: {type: mongoose.Schema.Types.ObjectId, ref:'user'},
    commentId:[ {type: mongoose.Schema.Types.ObjectId, ref:'Comment'}], //multiple comments
    todoId: {type: mongoose.Schema.Types.ObjectId, ref:'Todos'} //unique todo list

})

const Post = mongoose.model('post', postSchema)

export default Post