import React, { useState } from 'react';
import './Home.css';
import { useEffect } from 'react';
import Header from '../../componets/header/Header';
import TaskBar from '../../componets/taskbar/TaskBar';
import axios from 'axios';

//icon
import { FaRegCircle } from "react-icons/fa6"; //empty circle
import { FaRegCircleCheck } from "react-icons/fa6"; //mark circle
import { MdDelete } from "react-icons/md"; //delete


export default function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('https://to-do-list-app-1-awv3.onrender.com/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err))

    }, [todos])

    const handleEdit = (id) => {
        axios.put('https://to-do-list-app-1-awv3.onrender.com/update/' + id)
            .then(result => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('https://to-do-list-app-1-awv3.onrender.com/delete/' + id)
            .then(result => {
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Header />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem', textAlign: 'center' }}>
                <p style={{ fontSize: 'x-large', fontFamily: 'math', color: 'white' }}>To Do List</p>
                <TaskBar />
                <br />
                {
                    todos.length === 0
                        ?
                        <empty></empty>
                        :
                        todos.map(todo => (
                            <div className='task'>
                                <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                                    {
                                        todo.done ?
                                            <FaRegCircleCheck style={{ fontSize: '1.1rem', cursor: 'pointer' }} />
                                            :
                                            <FaRegCircle style={{ fontSize: '1.1rem', cursor: 'pointer' }} />

                                    }
                                    <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span>
                                        <MdDelete style={{ fontSize: '1.2rem', cursor: 'pointer' }} onClick={() => handleDelete(todo._id)} />
                                    </span>
                                </div>
                            </div>

                        ))
                }
            </div >
        </>

    )
}

// https://to-do-list-app-2-ecip.onrender.com
