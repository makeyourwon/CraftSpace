import mongoose from 'mongoose'

const commentSchema = mongoose.Schema({
    comment: {type: String, required: true},
    postId: {type: mongoose.Schema.Types.ObjectId, ref:'Post'},
    // userId: {type: mongoose.Schema.Types.ObjectId, ref:'User'}

})

const Comment = mongoose.model('comment', commentSchema)

export default Comment