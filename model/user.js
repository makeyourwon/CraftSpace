import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true, match: /^[A-Za-z0-9]+$/},
    pswd: {type: String, required: true},
    email: {type: String, required: true, unique: true, match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/},
    postId: [{type: mongoose.Schema.Types.ObjectId, ref:'Post'}] //multiple posts
    

},
{timestamps: true})

const User = mongoose.model('User', userSchema)

export default User