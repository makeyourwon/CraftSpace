import mongoose from 'mongoose'
import Post from './post.js'

const commentSchema = mongoose.Schema({
    comment: {type: String, required: true},
    // postId: {type: mongoose.Schema.Types.ObjectId, ref:'Post'},



}, {
  timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

export default Comment