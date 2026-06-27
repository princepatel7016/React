import React from 'react'
import { useContext } from 'react'
import { ThimDataContext } from '../context/Thimcontext'



const Nav2 = (props) => {

const data =  useContext(ThimDataContext)

return (
<div className='nav2'>
    <h4>Home</h4>
    <h4>About</h4>
    <h4>Contect</h4>
    <h4>{data}</h4>
    <h4>{props.thim}</h4>
    </div>
)
}

export default Nav2
