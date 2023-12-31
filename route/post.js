import express from 'express' 
const router = express.Router() 
import {getPost, getLates5Post, createPost , updatePost, deletePost, getPostById} from '../controllers/post.js'
import { isloggedIn } from '../controllers/auth.js'

//landing page with only 5 post.
router.get('/post', isloggedIn, async function(req, res) {
    try{
        const postList = await getLates5Post()
        res.status(200).send({postList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})

//get the post of all posts
router.get('/user/post', async (req,res) => {
    try{
        const postList = await getPost()
        res.status(200).send({postList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})


router.post('/user/post', async (req, res) => {
    try{

        const postInfo = req.body
        const newPost = await createPost(postInfo)

        res.status(200).json({
            message:'New post is created.',
            newPost: newPost
        })
    
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
    }

)

router.get('/user/post/:id', async (req,res) => {
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


router.put('/user/post/:id', async (req, res) => {
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

router.delete('/user/post/:id' , async (req,res) => {
    
    try{
        const id = req.params.id
        const postDeleted = await deletePost(id)
        res.status(200).json({postDeleted})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }
})










export default router