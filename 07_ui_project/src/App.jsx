import React from 'react'
import Section1 from './components/section1/Section_1'
import { Section } from 'lucide-react'
import Section2 from './components/section2/section_2'

const App = () => {

const users = [
  {
    img:'https://images.unsplash.com/photo-1585554414787-09b821c321c0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color:'red',
    intro:'',
    tag:'satisfied'
  },
  {
    img:'https://images.unsplash.com/photo-1758598738106-f8f9d4c5d9d2?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color:'orange',
    intro:'',
    tag:'undserved'
  },
  {
    img:'https://images.unsplash.com/photo-1713526708767-ae5b1889772b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color:'green',
    intro:'',
    tag:'underbanked'
  },
  {
    img:'https://plus.unsplash.com/premium_photo-1669324357594-c7f8c1e399f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
     color:'blue',
    intro:'',
    tag:'underground'
  },
  
]

  return (
    <div >
    <Section1 users={users}/>
    <Section2 />

    </div>
  )
}

export default App
