import React, { useState } from 'react'

const App = () => {


// const [a, setnum] = useState(100)
// const [name, setname] = useState('hello')
// const [users, setarr] = useState([10,20,40,50])
// function changnum(){
//   setnum(1000000)
//   setname('world')
//   setarr([10,25,45,80])
// }


const [num, setnum] = useState(1)


function incresenum(){
  setnum(num+1)
}
function dicresenum(){
  setnum(num-1)
}
function jump5(){
  setnum(num+5)
}
  return (
    // <div>
    //   <h1>value of a is{a} <br />{users} <br /> name of {name}</h1>
    //   <button  onClick={changnum}>click</button>
    // </div>


    <div>
      <h1>{num}</h1>
      <button onClick={incresenum} >increase</button>
      <button onClick={dicresenum}>decrease</button>
      <button onClick={jump5}>jump 5</button>
    </div>
  )
}

export default App
