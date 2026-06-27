import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

const [num, setnum] = useState(0)
const [num2, setnum2] = useState(100)

 useEffect(function(){
  console.log('use effect is renning')
  console.log('heyyyy')
 },[num])
 //[num] to jyare num per process kari tyare clg chalse baki nai chale

 // [] aa dependancy arry chhe je aek j var chale

  return (
    <div>
      <h1>valu of num1 is {num}</h1>
      <h1>value of num2 is {num2}</h1>
    <button onMouseEnter={()=>{
      setnum(num+1)
      }}
      onMouseLeave={()=>{
        setnum2(num2+100)
      }}
      >click</button>
    </div>
  )
}

export default App
