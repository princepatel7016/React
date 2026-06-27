import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'


const App = () => {

const [userdata, setUserdata] = useState([])

const [index, setindex] = useState(1)

const getdata = async ()=>{
// axios.post('https://picsum.photos/v2/list?page=2&limit=10',
//   {usename:'prince',age:'18'}
// )

const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
setUserdata(response.data);
// console.log(response.data)
}

useEffect(function(){
getdata()
},[index])


let printuserdata = <h3 className='text-amber-600 absolute top-1/2 left-1/2  -traslate-x-1/2  -translate-y-1/2'>loading........</h3>

if(userdata.length>0){
  printuserdata =userdata.map(function(elem,idx){
    return <div key={idx}>
      <Card  elem={elem}/>
    </div>
  })
}

return (
<div className='bg-black h-screen overflow-auto p-4 text-white'>
  <h1 className='fixed text-4xl bg-amber-800'>{index}</h1>

      <div className='flex flex-wrap gap-4'>
        {printuserdata}
      </div>

      <div className='flex justify-center gap-5 items-center p-4'>

        <button 
        onClick={()=>{
        if(index>1){
            setindex(index-1)
            setUserdata([])
        }

        }}
        className='bg-amber-400 px-4 text-sm py-2 cursor-pointer active:scale-95 rounded text-black font-semibold'>
          prev
        </button>

        <button
        onClick={()=>{

          setindex(index+1)
          setUserdata([])
        }}
          className='bg-amber-400 px-4 py-2 text-sm cursor-pointer active:scale-95 rounded text-black font-semibold'>
          next
        </button>

      </div>

   </div>
  )
}

export default App
