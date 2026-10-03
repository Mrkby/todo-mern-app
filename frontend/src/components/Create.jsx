import React, { useState } from 'react'
import { MdAddBox } from "react-icons/md";
import axios from 'axios'

function Create(props) {
    const { getTodos,iconClr } = props;
    const BACKEND_URL = import.meta.env.VITE_BECKEND_URL
    const [task, setTask] = useState([])
    const AddTodo = () => {
        axios.post(BACKEND_URL+'/api/add', { task: task })
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

            <div className='add-btn'
                onClick={() => {
                    if (task !== "") {
                        AddTodo()
                    }
                }} > <MdAddBox className='add-icon'  style={{color : iconClr ? " black" : '#ffffffc0'}}/> </div>

        </div >
    )
}

export default Create
