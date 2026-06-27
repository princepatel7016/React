import React from 'react'
import { Link ,Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div>
            <div className='flex justify-center  gap-10 py-4'>
            <Link className='text-xl font-semibold' to='/product/men'>men</Link>
            <Link className='text-xl font-semibold' to='/product/women'>women</Link>
        </div>
      </div>
      {/* <h1>hrrrrrrrrrrrrrrrrrrrrrrrrrrr</h1> */}
     
      <Outlet />
    </div>
  )
}

export default Product
