import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.elem.url}>
        <div className='h-40 w-44 overflow-hidden rounded-xl bg-white'>
        <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
        </div>
        <h2 className='font-bold  text-lg'>{props.elem.author}</h2>
        </a>
        {/* a tag karva thi je image per touch kari te jya thi lidhel chhe tya vaya jai */}
    </div>
  )
}

export default Card
