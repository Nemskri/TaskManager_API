const Task = require('../models/tasks')

const getAllTasks = async (req, res) => {
    try {
        const task = await Task.find({})
        res.status(201).json({ task })
    } catch (e) {
        res.status(500).json({ message: e })
    }

}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (e) {
        res.status(500).json({ message: e })
    }
}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })
        if (!task) {
            return res.status(404).json({ mssg: `No task with ID ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (e) {
        res.status(500).json({ message: e })
        console.log(e)
    }
}

const deleteTask = async (req, res) => {

    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ mssg: `No task with ID ${taskID}` })
        }
        res.status(200).json({ task })

    } catch (e) {
        res.status(500).json({ message: e })
    }

}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json({ mssg: `No task with ID ${taskID}` })
        }
        res.status(200).json({ task })
    } catch (e) {
        res.status(500).json({ message: e })
    }
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}