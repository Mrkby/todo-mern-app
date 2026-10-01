import TodoModel from '../models/todoModel.js'

export const getTodoList = (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }))
}
export const getAddTask = (req, res) => {
    const task = req.body.task;
    TodoModel.create({
        task: task
    })
        .then(result => res.json(result))
        .catch(err => res.status(500).json({ error: err.message }))
}
export const getDeletTask = (req, res) => {
    const { id } = req.params
    TodoModel.findByIdAndDelete(id)
        .then(result => res.status(200).json(result))
        .catch(err => res.json(err))
}
export const getUpdateTask = async (req, res) => {

    try {
        const { id } = req.params
        const todo = await TodoModel.findById(id);
        todo.done = !todo.done;
        await todo.save();

        res.status(200).json(todo)
    }
    catch (err) {
        res.status(500).json(err)
    }
}