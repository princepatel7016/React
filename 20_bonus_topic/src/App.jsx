import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

const [thim, setthim] = useState('light')

  return (
    <div>
      <h1>thime is a {thim}</h1>
      <Navbar thim={thim} setthim={setthim}/>
    </div>
  )
}

export default App
