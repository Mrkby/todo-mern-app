import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import Footer from '../components/Footer';
import axios from 'axios'
import Create from '../components/Create';

// let PORT = process.env.PORT

function Home() {
    const [todos, setTodo] = useState([])
    // const [done,Setdone] = useState()

    useEffect(() => {
        axios.get('http://localhost:3001/api/get')
            .then(result => setTodo(result.data))
            .catch(err => console.log(err))
    }, [])
    const getTodos = () => {
        axios.get('http://localhost:3001/api/get')
            .then(result => setTodo(result.data))
            .catch(err => console.log(err))
    }
    const onDelete = (id) => {
        axios.delete(`http://localhost:3001/api/delete` + id)
            .then(() => {
                setTodo(prevTodos =>
                    prevTodos.filter(todo => todo._id !== id)
                )
            })
            .catch(err => console.log(err))
    }
    const handleEdit = (id) => {
        axios.put(`http://localhost:3001/api/update/` + id)
            .then(result => {
                setTodo(prevTodos => prevTodos.map(todo =>
                    todo._id === id
                        ? result.data
                        : todo
                )
                )
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <div className='container'>
                <div className='box'>
                    <h1>Your To Do</h1>
                    <Create getTodos={getTodos} />

                    {
                        todos.length === 0 ?
                            <p> No Recoreded</p>
                            :
                            todos.map(todo => (
                                <div className="task-list ">
                                    <div className={todo.done ? "through_line" : "none"}   >
                                        <span className='checkbox'> <input type="checkbox"
                                            onChange={() => { handleEdit(todo._id) }}
                                            checked={todo.done} /></span>

                                        <span className='todoTask'>{todo.task}</span>

                                    </div>
                                    <button onClick={() => { onDelete(todo._id) }}>
                                        <MdDelete />
                                    </button>
                                </div>
                            ))

                    }
                    <hr />
                    <Footer />
                </div>
            </div >
        </>
    )
}

export default Home
