import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
     

      <div className="Card">
        
        <img src="https://images.unsplash.com/photo-1769863467291-23cf7902f686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
      <h1>prince</h1>
       <p>Lorem ipsum dolor sit, amet consectetur adipisicin</p>
        <button>view profile</button> 
        </div>
        <Card user='world' age={100} img='https://images.unsplash.com/photo-1769863467291-23cf7902f686?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
        <Card user='krish' age={20} img='https://images.unsplash.com/photo-1766503206606-27de0861e8a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D'/>
        <Card user='heyyy' age={22}/>
        <Card user='me' age={20}/>
    </div>
  )
}

export default App
