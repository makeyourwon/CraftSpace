import express from 'express' 
const router = express.Router() 
import {getPost, getLates5Post, createPost , updatePost, deletePost, getPostById} from '../controllers/post.js'
import { isloggedIn } from '../controllers/auth.js'
import User from '../model/user.js'
import { updateUser } from '../controllers/user.js'

//landing page with only 5 post without loggin.
router.get('/post', async function(req, res) {
    try{
        const postList = await getLates5Post()
        res.status(200).send({postList})
        
    }
    catch(error){
        res.status(400).send({
            posterror: `${error}`
        })
    }
})

//Routes below need login info.
//get the post of all posts
router.get('/user/post', isloggedIn, async (req,res) => {
    try{
        const postList = await getPost()
        res.status(200).send({postList})
    }
    catch(error){
        res.status(400).send({
            geterror: `${error}`
        })
    }
})


router.post('/user/post', isloggedIn, async (req, res) => {
    try{
        //get the new post
        const postInfo = req.body
        
        //get the userId
        postInfo.userId = req.user.id
        const thisUser = await User.findOne({_id:req.user.id})

        //store the post to server
        const newPost = await createPost(postInfo)
        const id = thisUser._id

        //update the postId to user schema
        const update = await User.findByIdAndUpdate(id, 
            { $push: { postId: newPost[0]._id } }
        , {new:true})


        res.status(200).json({
            message:'New post is created.',
            newPost: newPost
        })
    
    }
    catch(error){
        res.status(400).send({
            posterror: `user/post error: ${error}`
        })
    }
    }

)

router.get('/user/post/:id', isloggedIn, async (req,res) => {
    try{
        const id = req.params.id
        const postList = await getPostById(id)
        res.status(200).send({postList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})


router.put('/user/post/:id', isloggedIn, async (req, res) => {
    const id = req.params.id
    const postToUpdate = req.body
    try{
        const postUpdated = await updatePost(id, postToUpdate)
        res.status(200).json({postUpdated})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }

})

router.delete('/user/post/:id' , isloggedIn, async (req,res) => {
    
    try{
        const id = req.params.id
        const postDeleted = await deletePost(id)

        //get the userId and postId
        //Need to console log (req) before retrieve req.user.id. Otherwise the userId result will null
        // console.log(req)
        const userId = req.user.id
        const postIdToRemove = id


        User.findByIdAndUpdate(
            userId,
            { $pull: { postId: postIdToRemove } },
            {new:true}
            )

            //user try/catch
        .then(updatedUser => {
            console.log("Updated user:", updatedUser);
        })
        .catch(error => {
            console.error("Error updating user:", error);
        })

        res.status(200).json({postDeleted})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }
})










export default router