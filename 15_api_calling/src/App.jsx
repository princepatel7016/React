import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
// ********** fetch**********
//  async function getdata(){

//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  // await means jya sudhi response na aav tab tak ruk jao


  // const data = await response.json()
  // console.log(data)
  // console.log(response.json())
// }

// *******axios**********

const [data, setdata] = useState([])

const getdata = async()=>{
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  
  setdata(response.data)
}


  return (
    <div>
      <button onClick={getdata}>gate data</button>
      <div>
        {data.map(function(elem,idx){
            return <h3>hello {elem.name} {idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App
