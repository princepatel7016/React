import React from 'react'

const App = () => {

// localStorage.setItem('user','prince')
// user key and prince value output inspect ma application ma aave and hamesh te storage rye

// localStorage.setItem('age','20')


// localStorage.removeItem('user')
// localStorage.removeItem('age')
// remove the key


// const  age = localStorage.getItem('age')
// const  user = localStorage.getItem('user')
// console.log(age,user);
// getItem() ka use local storage me save ki hui value ko nikalne (read karne) ke liye hota hai


// const user ={
//   name:'prince',
//   age:20,
//   city:'rajkot'
// }
// console.log(user)

// localStorage.setItem('user',JSON.stringify(user))
// json.stringfy object ne string ma convert kre

const user = JSON.parse(localStorage.getItem('user'))
console.log(user)
// json.parse string ma fervel chhe tene pachhi hati tem object kari dye

  return (
    <div>
      app
    </div>
  )
}

export default App
