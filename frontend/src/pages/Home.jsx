import React, { useEffect, useState } from 'react'
import { MdDelete } from "react-icons/md";
import Footer from '../components/Footer';
import axios from 'axios'
import Create from '../components/Create';


function Home() {
    const [todos, setTodo] = useState([])
     const [loading,setloading] = useState(true)
    const BACKEND_URL = import.meta.env.VITE_BECKEND_URL
    useEffect(() => {
        axios.get(BACKEND_URL+'/api/get')
            getTodos()
    }, [])
    const getTodos = async () => {
        try{ 
            const response = await axios.get(BACKEND_URL+'/api/get')
            setTodo(response.data)
        }catch (err){
             
                console.log(err)
             
        }finally{
            setloading(false)
        }
        
            
    }
    const onDelete = (id) => {
        axios.delete(`${BACKEND_URL}/api/delete` + id)
            .then(() => {
                setTodo(prevTodos =>
                    prevTodos.filter(todo => todo._id !== id)
                )
            })
            .catch(err => console.log(err))
    }
    const handleEdit = (id) => {
        axios.put(`https://todo-mern-app-lc1r.onrender.com/api/update/` + id)
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
