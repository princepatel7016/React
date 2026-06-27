import React, { useState } from 'react'

const App = () => {

const [title, settitle] = useState('')


const submithandler = (e)=>{
  e.preventDefault()
  // ana thi page reload na thai
  console.log('form submit',title)

  settitle('')

}

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} >         
        
        <input type="text"
          placeholder='enter name'
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
          }}
         />
        <button>submit</button>
      </form>
    </div>
  )
}
export default App
