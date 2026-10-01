import React, { useState } from 'react'
import { MdAddBox } from "react-icons/md";
import axios from 'axios'

function Create({ getTodos }) {


    const [task, setTask] = useState([])
    const AddTodo = () => {
        axios.post('http://localhost:3001/api/add', { task: task })
            .then(result => {
                getTodos()
                setTask("")
            })
            .catch(err => console.log(err))
    }

    return (

        <div className='Add-items'>
            <input type="text"
                placeholder='Add new task'
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={(e) => {
                   if (task !== "") {
                    if (e.key === "Enter") {
                        AddTodo()
                    }
                }
                }} />

            <button className='add-btn'
                onClick={() => {
                    if (task !== "") {
                        AddTodo()
                    }
                }} > <MdAddBox /> </button>

        </div >
    )
}

export default Create
