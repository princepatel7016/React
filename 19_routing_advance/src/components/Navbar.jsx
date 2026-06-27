import React from 'react'
import { Link  } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex px-8 items-center py-3 bg-cyan-900 justify-between'>
      <h2 className='text-2xl font-bold'>helloo</h2>
      <div className='flex gap-10'>

        <Link className='text-lg font-medium' to ='/'> home</Link>
        <Link className='text-lg font-medium' to ="/about"> about</Link>
        <Link className='text-lg font-medium' to ="/courses"> courses</Link>
        <Link className='text-lg font-medium' to ='/product'> product</Link>
        
        {/* link karva thi page reload na thai and jo a tag vapri to page reload thai */}

      </div>
    </div>
  )
}

export default Navbar
