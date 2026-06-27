import React, { useState } from 'react'

const App = () => {

const [title, settitle] = useState('')
const [detail, setdetail] = useState('')

const [task, settask] = useState([])

const submithandler = (e)=>{
 e.preventDefault();
// console.log(title,detail);

const copytask = [...task]
copytask.push({title,detail})

settask(copytask)

// console.log(task)


settitle('')
setdetail('')
}

const deletenote = (idx)=>{
  const copytask = [...task]
  copytask.splice(idx,1)
  settask(copytask)
}




  return (
    <div className='h-screen lg:flex  bg-black text-amber-50 '>

      <form onSubmit={(e)=>{
      // Ye ek event handler hai jo tab run hota hai jab:form submit hota hai
   
        submithandler(e);
      }}
       className='flex flex-col lg:w-1/2  gap-4 items-start  p-10  ' >

    <h1 className='text-4xl font-bold'>add notes</h1>

        <input 
          type="text"
          placeholder='enter notes handling'
          className='px-5 py-5 w-full font-medium rounded outline-none border-2  '
          value={title}
          // Input box ka data React state se control ho raha haiJo title me value hogi, wahi input me dikhegi

          onChange={(e)=>{
            settitle(e.target.value)
          }}
        // User input me type karta hai
        // onChange trigger hota hai
        // e.target.value me text milta hai
        // settitle() us value ko save karta hai
        // React UI update kar deta hai
          />

        <textarea 
          type="text"
          placeholder='enter details'
          className='px-5 py-2 h-28 w-full font-medium items-start rounded outline-none border-2 '
          value={detail}
          onChange={(e)=>{
            setdetail(e.target.value)
          }}  >
          </textarea>

          <button className='bg-white text-black active:bg-black font-medium px-5 py-2 rounded'>add notes</button>

    {/*    
          User button click karta hai
          Form submit hota hai
          onSubmit trigger hota hai
          submithandler(e) call hota hai
          preventDefault() page reload rokta hai
          Tumhara logic run hota hai */}
          {/* <img className='h-60' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXtZxJCrxiCuZbGi1Vp_FDFoi6FqY0WpdwQ&s" alt="" /> */}

        </form>

        <div className=' lg:w-1/2 lg:border-l-2  p-10'>

          <h1 className='text-4xl font-bold'>recent notes</h1>

          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>

          {/* <div className='h-40 w-35 rounded-2xl bg-white'></div> */}
          
          {task.map(function(elem,idx){

            return <div  key={idx} className='flex justify-between flex-col items-start relative h-40 w-35 rounded-2xl text-black bg-cover p-4 bg-[url("https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png")]'>

              
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-2 leading-tight flex text-xs font-semibold  text-gray-700'>{elem.detail}</p>

              <button onClick={()=>{
                deletenote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-600 text-white text-xs font-bold rounded'>delete</button>
            </div>
          })}
        

       </div>
      

      </div>
     
    </div>
  )
}
export default App
