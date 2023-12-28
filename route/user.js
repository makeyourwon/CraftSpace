import express from 'express' 
const router = express.Router() 
import {getUser, createUser , updateUser, deleteUser} from '../controllers/user.js'


router.get('/', function(req, res) {
    res.json({
        message: `HOME`
    })
})

router.get('/user', async (req,res) => {
    try{
        const userList = await getUser()
        res.status(200).send({userList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})


router.post('/user', async (req, res) => {
    try{
        const userinfo = req.body
        const newUser = await createUser(userinfo)

        res.status(200).json({
            message:'New user is created.',
            newUser: newUser
        })
    
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
    }

)

router.put('/user/:id', async (req, res) => {
    const id = req.params.id
    const userToUpdate = req.body
    try{
        const userUpdated = await updateUser(id, userToUpdate)
        res.status(200).json({userUpdated})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }

})

router.delete('/user/:id' , async (req,res) => {
    
    try{
        const id = req.params.id
        const userDeleted = await deleteUser(id)
        res.status(200).json({userDeleted})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }
})










export default router