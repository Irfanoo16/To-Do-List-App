import React from 'react'
import logo from '../../assets/images/logo2.png';

export default function Header() {
    return (
        <div style={{
            boxShadow: " rgba(0, 0, 0, 5) 0px 0px 2px 0px", display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', padding: '0 1rem', margin: '.4rem .5rem', fontSize: '1rem', borderRadius: '.3rem'
        }}>
            <img src={logo} alt='' style={{ width: '6rem' }} />
            <p>To Do</p>
        </div>
    )
}
