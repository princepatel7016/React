import React from 'react'

const App = () => {


const submithandler = (e)=>{
  e.preventDefault()
  console.log('form submit')

  // form handle kari lidhu jethi form reload submit time ae naithai
}

  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e)
      }} >         
        
        <input type="text" placeholder='enter name'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App
