import React from 'react'

const App = () => {

// function btnclicked(){
//   console.log('btn click');
// } 

// function mouseenter(){
//   console.log('mouse entered')
// }



      // function changing(value) {
      //   console.log(value)
      // }


      const pagescroll = function(elem){
  if(elem>0){
    console.log('seedha scrolling')
  }else{
    console.log('negative scrooling')
  }
}


  return (
//     <div>
//       <h1>hello , prince</h1>

//       {/* <button onMouseEnter={mouseenter} onClick={btnclicked}>change user</button> */}

// {/* 
//       <button onClick={function(){
//         console.log('clicked!!')
//       }}>change user</button> */}

//       <button onClick={btnclicked}>explore this</button>


//       <input onChange={function(elem){
//         changing(elem.target.value)
//       }} type="text" placeholder='enter name' />
//     </div>


  // <div onMouseMove={function(elem){
  //   console.log(elem.clientX)
  // }} className='box'>
  // </div>



<div onWheel={(elem)=>{
pagescroll(elem.deltaY)
}}>
  <div className="page1"> </div>
  <div className="page2"> </div>
  <div className="page3"> </div>
</div>


  )
}

export default App










// const a= document.querySelector('h1')

// a.addEventListener('click',function(){

// })
