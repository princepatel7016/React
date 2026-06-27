import React from 'react'
import Card from './components/card'
import Navbar from './components/navbar'

const App = () => {

  const user = 'man'
  return (
    <div>
      <h1>hello, guse iam  prince {user}</h1>
      <Card /><br />

      <Card /> <br />
      <Card /> <br />

      <Navbar/>
      <Navbar/>
    </div>
  )
}

export default App

