import express from 'express' 
import {getComment,
    updateComment,
    createComment,
    deleteComment,
    getCommentById} from '../controllers/comment.js'
import { isloggedIn } from '../controllers/auth.js'
const router = express.Router() 

router.get('/post/comment', isloggedIn, function(req, res) {
    res.json({
        message: `should be landing page of post with newest comment in the front`
    })
})

router.get('/user/comment', isloggedIn, async (req,res) => {
    try{
        const commentList = await getComment()
        res.status(200).send({commentList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})


router.post('/user/post/comment', isloggedIn, async (req, res) => {
    try{

        const commentInfo = req.body
        const newComment = await createComment(commentInfo)

        res.status(200).json({
            message:'New comment is created.',
            newComment: newComment
        })
    
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
    }

)


router.get('/user/post/comment/:id', isloggedIn, async (req,res) => {
    try{
        const id = req.params.id
        const commentList = await getCommentById(id)
        res.status(200).send({commentList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})

router.put('/user/post/comment/:id', isloggedIn, async (req, res) => {
    const id = req.params.id
    const commentToUpdate = req.body
    try{
        const commentUpdated = await updateComment(id, commentToUpdate)
        res.status(200).json({commentUpdated})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }

})

router.delete('/user/post/comment/:id' , isloggedIn, async (req,res) => {
    
    try{
        const id = req.params.id
        const commentDeleted = await deleteComment(id)
        res.status(200).json({commentDeleted})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }
})










export default router