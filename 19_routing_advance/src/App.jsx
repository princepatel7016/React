import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Routes , Route } from "react-router-dom";
import Product from './pages/Product';
import About from './pages/About';
import Notfound from './pages/Notfound';
import Men from './pages/men';
import Women from './pages/Women';
import Courses from './pages/Courses';
import CoursesDetail from './pages/CoursesDetail';
import Navbar2 from './components/Navbar2';



const App = () => {
  return (
    <div className='bg-black h-screen text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='/about' element={<About />} />
        <Route  path='/courses' element={<Courses />}    />
        <Route  path='/courses/:id' element={<CoursesDetail />}/>
        {/* coursse/:id karva thi coursesdetail vali file khuli jse game user search kare to pn , pn te courses/ ni pachal lakhe to  aane dynamic routing kahevay */}
        

        <Route  path='/product' element={<Product />} > 
          <Route  path='men' element={<Men />} />
          <Route  path='women' element={<Women />}    />
        </Route>

        <Route  path='*' element={<Notfound />} />
        {/* JO user biju kai search kare tena mate */}

      </Routes>
     
      <Footer />
    </div>
  )
}

export default App
