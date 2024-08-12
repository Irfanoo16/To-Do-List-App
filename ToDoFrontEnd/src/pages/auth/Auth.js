import React from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';


export default function Auth() {
    return (
        <div className='main' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ marginTop: '4rem', fontSize: '1.5rem', fontFamily: 'monospace', }}>Welcome to <span style={{ color: 'rgb(17, 200, 220)' }}>To Do</span> App</p>
            <div style={{ marginTop: '18rem' }}>
                <Link to='/home' style={{ textDecoration: 'none' }}>
                    <span className='btn'>Get Start</span>
                </Link >
            </div>
        </div>
    )
}
