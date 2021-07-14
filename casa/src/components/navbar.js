import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link to={'/'} >Home</Link>
            <Link to={'/shopping'} >Shopping</Link>
            <Link to={'/bills'} >Bills</Link>
            <Link to={'/Holidays'} >Holidays</Link>
        </div>
    )
}

export default Navbar;