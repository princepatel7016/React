import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const page1content = (props) => {
  return (
    <div className='pb-10 pt-5 px-18 flex gap-10 items-center h-[90vh]'>
      
      <Leftcontent />
      <Rightcontent users={props.users} />
    </div>
  )
}

export default page1content
