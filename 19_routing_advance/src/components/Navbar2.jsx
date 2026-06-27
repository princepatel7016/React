import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

    const navigate = useNavigate()
// const btnclicked = ()=>{
// navigate('/')
//}
  return (
    <div className='py-3 px-2 flex bg-amber-200'>
        <button
        onClick={()=>{
        navigate('/')

        }} 
        className='bg-emerald-800 font-medium px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>
        return to home page
        </button>

        <button 
        onClick={()=>{
        navigate(-1)
        }}
        className='bg-emerald-800 font-medium px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>
        Back
        </button>

        <button 
        onClick={()=>{
        navigate(+1)
        }}
        className='bg-emerald-800 font-medium px-5 py-2 m-2 rounded cursor-pointer active:scale-95'>
        Next
        </button>
    </div>
  )
}

export default Navbar2
