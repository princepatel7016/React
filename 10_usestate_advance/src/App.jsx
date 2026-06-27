import React, { useState } from 'react'

const App = () => {

//   const [num,setnum] = useState({user:'prince',age:'20'})
// const btnclicked= ()=>{
// const newnum = {...num};
// newnum.user = 'helloo'
// newnum.age = 25
// setnum(newnum)


//   const [num,setnum] = useState([10,20,30])

// const btnclicked= ()=>{
// const newnum =[...num];
// newnum.push(1000)

// setnum(newnum)


const [num, setnum] = useState({user:'rishi', age:17})

const btnclicked = ()=>{
setnum(prev=>({...prev,age:25}))     // batch update 


// setnum(num+1)
// setnum(num+1)
// setnum(num+1)
//  this is only one step update but prev third step update
}



  return (
    // <div>
    //   <h1>{num.user} , {num.age}</h1>
    //   <button onClick={btnclicked}>clicked</button>
    // </div>


    // <div>
    //   <h1>{num}</h1>
    //   <button onClick={btnclicked}>clicked</button>
    // </div>

    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnclicked} >clicked</button>
    </div>

  )
}

export default App
