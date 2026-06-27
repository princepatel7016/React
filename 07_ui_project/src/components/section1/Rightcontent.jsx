import React from 'react'
import Rightcard from './Rightcard'


const Rightcontent = (props) => {

    console.log(props)
  return (
    <div id='right' className='h-full flex flex-nowrap gap-5  overflow-x-auto rounded-4xl w-2/3 p-5 '>
    { props.users.map(function(elem,idx){

    return  <Rightcard key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag} />
})}
    </div>
    
  )
}

export default Rightcontent
