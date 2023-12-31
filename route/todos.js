import express from 'express' 
const router = express.Router() 
import {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoById
} from '../controllers/todos.js'
import { isloggedIn } from '../controllers/auth.js'



router.get('/user/todo', async (req,res) => {
    try{
        const todoList = await getTodo()
        res.status(200).send({todoList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})


router.post('/user/post/todo', async (req, res) => {
    try{

        const todoInfo = req.body
        const newTodo = await createTodo(todoInfo)

        res.status(200).json({
            message:'New todo is created.',
            newTodo: newTodo
        })
    
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
    }

)

router.get('/user/post/todo/:id', async (req,res) => {
    try{
        const id = req.params.id
        const todoList = await getTodoById(id)
        res.status(200).send({todoList})
    }
    catch(error){
        res.status(400).send({
            error: `${error}`
        })
    }
})

router.put('/user/post/todo/:id', async (req, res) => {
    const id = req.params.id
    const todoToUpdate = req.body
    try{
        const todoUpdated = await updateTodo(id, todoToUpdate)
        res.status(200).json({todoUpdated})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }

})

router.delete('/user/post/todo/:id' , async (req,res) => {
    
    try{
        const id = req.params.id
        const todoDeleted = await deleteTodo(id)
        res.status(200).json({todoDeleted})
    }
    catch(error){
        res.status(403).send({
            error: `${error}`
        })
    }
})










export default router