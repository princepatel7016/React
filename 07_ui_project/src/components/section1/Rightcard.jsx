import React from 'react'
import Rightcardcontent from './Rightcardcontent'


const Rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden shrink-0  relative w-40 rounded-3xl'>
     
     <img className='h-full w-full object-cover' src={props.img}  alt="" />

   <Rightcardcontent color={props.color} id={props.id} tag={props.tag}/>
 
   
    </div>
  )
}

export default Rightcard
