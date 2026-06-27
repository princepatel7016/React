import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'

const App = () => {

const [thim, setthim] = useState('light')

  return (
    <div>
    
      <Navbar  thim={thim}/>
    </div>
  )
}

export default App
