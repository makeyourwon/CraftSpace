import express from 'express' 
const router = express.Router() 
import {getUser, createUser , updateUser, deleteUser} from '../controllers/user.js'
import User from '../model/user.js'
import { getUserInfo } from '../controllers/auth.js'
import { isloggedIn } from '../controllers/auth.js'

//test route
router.get('/', function(req, res) {
    res.json({
        message: `HOME`
    })
})


//rest route
router.post('/signin', async (req, res) => {
    let isloggedIn = false
    const inputInfo = req.body
    // const userOne = await User.findOne({username: req.body.username})
    const userGot = await getUserInfo(req)
    try{

        if (inputInfo.username === userGot.username && inputInfo.pswd === userGot.pswd){
            res.status(200).send({
                message:"logged in sucessfully"
            })
            isloggedIn = true
        }
    }catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }

})


//Routes below need login info.
router.get('/user', isloggedIn, async (req,res) => {
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


router.post('/user', isloggedIn, async (req, res) => {
    try{
        const userInfo = req.body
        const newUser = await createUser(userInfo)

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

router.put('/user/:id', isloggedIn, async (req, res) => {
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

router.delete('/user/:id' , isloggedIn, async (req,res) => {
    
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