import React from 'react'
import { createContext } from 'react'


export  const ThimDataContext =  createContext()
// aa aapde context create karu kahevai first step and export ae game tya moklishakai

const Thimcontext = (props) => {
  return (
    <div>
      
    <ThimDataContext.Provider value='world'>
        {props.children }
    </ThimDataContext.Provider>
    {/* aa provide karyu je secound step chhe */}
    </div>
  )
}

export default Thimcontext
