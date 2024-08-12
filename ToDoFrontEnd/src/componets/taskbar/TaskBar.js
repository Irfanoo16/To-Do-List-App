import React, { useState } from 'react';
import axios from 'axios';
import './TaskBar.css';


export default function TaskBar() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('https://to-do-list-app-1-awv3.onrender.com/add', { task: task })
            .then(result => {
                window.location.reload()
            })
            .catch(err => console.log(err));
    }
    return (
        <form style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.8rem' }}>
                <input id='input' type='text' placeholder='Enter a ToDO' onChange={(e) => setTask(e.target.value)}
                    style={{ padding: '.6rem .5rem', width: '100%', minWidth: '15rem', border: 'none', borderRadius: '.3rem', outline: 'none' }} />
                <span className='add' onClick={handleAdd}>Add</span>
            </div>
        </form>
    )
}
