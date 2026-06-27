import React from 'react'
import Nav2 from './Nav2'
import { ThimDataContext } from '../context/Thimcontext'
import { useContext } from 'react'

const Navbar = (props) => {
    const data =  useContext(ThimDataContext)
    console.log(data)
  return (
    <div className='nav'>
    <h2>{data}</h2>
    <Nav2  thim={props.thim} />
    </div>
  )
}

export default Navbar
