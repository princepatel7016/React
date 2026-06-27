import React from 'react'
import { ArrowRight } from 'lucide-react';
const Rightcardcontent = (props) => {
  return (
    
       
            <div className='absolute left-0 top-0 h-full w-full  p-2  flex flex-col justify-between'>
        <h2 className='bg-white text-2xl font-bold rounded-full w-10 h-10 flex justify-center items-center'>{props.id+1}</h2>
    

        <div>
                <p className='text-shadow-2xs text-sl leading-normal text-white  absolute bottom-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, cupiditathe he eh !</p>
            </div>

            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}}  className='text-white font-semibold px-2 py-1 rounded-full'>{props.tag}</button>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibold px-2 py-1 rounded-full'>  <ArrowRight /> </button>
                </div>
            
    </div>
  )
}

export default Rightcardcontent
