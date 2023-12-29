
import Todos from "../model/todos.js";

const getTodo = () =>{
    return Todos.find({})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const createTodo =  (todo) => {
    return Todos.insertMany(todo)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
    
}

const getTodoById = (id) =>{
    return Todos.findById(id)
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const updateTodo = (id, updateinfo) => {
    return Todos.findByIdAndUpdate(id, updateinfo, {new:true})
    .then(response => {
        return response
    })
    .catch(error => {
        throw error
    })
}

const deleteTodo = (id) => {
    return Todos.findByIdAndDelete(id)
    .then(response => {
        return response
    })
    .catch(error =>{
        throw error
    })
}

export {
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
    getTodoById
}