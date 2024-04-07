const Task = require('../models/Task')
const getALLTasks = ( req,res) => {
    res.send('Get all task')
}



const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req, res) => {
    res.json({id: req.params.id})
}

const updateTask = (req, res) => {
    res.send('Update task')
}

const deleteTask = (req, res) => {
    res.send('Delete task')
}



module.exports = {
    getALLTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}