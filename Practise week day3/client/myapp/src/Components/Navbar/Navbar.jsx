import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'


    function Navbar() {
        return (
            <>
                <div className='navbar'>
                    <h1>Floral Studio</h1>
                    <ul className='navbarList'>
                        <li><Link to='/' className='home'>Home</Link></li>
                        <li><Link to='add' className='add'>Add Product</Link></li>
                        <li>Portfolio</li>
                        <li>Pricing</li>
                        <li>Contacts</li>
                    </ul>
                </div>
            </>
        )
    }

export default Navbar