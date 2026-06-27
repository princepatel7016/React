import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetail = () => {

    const param=useParams()
    // useparams ae peramiter layavine dye
    console.log(param.id)


  return (
    <div >
        <h1 > {param.id}courses detail</h1>
    </div>
  )
}

export default CoursesDetail
