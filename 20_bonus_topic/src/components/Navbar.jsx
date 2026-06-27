import React from 'react'

const Navbar = (props) => {
  return (
    <div>
        {/* <p>{props.thim}</p> */}

        <button onClick={()=>{
            props.setthim('dakuuuuuuuu')
        }}>change theme</button>
    </div>
  )
}

export default Navbar
