import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
        <div className='nav'>
        <h3>shrey</h3>
        <div>
        <Link to = '/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/product'>product</Link>
        </div>
        
    </div>
  )
}

export default Navbar
