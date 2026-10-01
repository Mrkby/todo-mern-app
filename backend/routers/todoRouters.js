import express from 'express'
import { getAddTask, getDeletTask, getTodoList, getUpdateTask } from '../condroller/todoCondroller.js'

const router = express.Router();

router.get('/get', getTodoList)
router.post('/add', getAddTask)
router.delete('/delete:id', getDeletTask)
router.put('/update/:id', getUpdateTask);


export default router;