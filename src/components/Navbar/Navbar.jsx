import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className='nav-menu'>
                <ul className='m-0'>
                    <Link to='/' className='nav-icon'><i className="bi bi-house"></i></Link>
                    <Link to='/about' className='nav-icon'><i className="bi bi-person-fill"></i></Link>
                    <Link to='/resume' className='nav-icon'><i className="bi bi-file-earmark"></i></Link>
                    <Link to='/project' className='nav-icon'><i className="bi bi-code-square"></i></Link>
                    <Link to='/contect' className='nav-icon'><i className="bi bi-geo-alt"></i></Link>
                </ul>
            </div>
        </>
    )
}

export default Navbar
