import React from 'react'
import { Link } from 'react-router-dom'

const JobAccepted = ({join}) => {
  return ( join.job &&
    <div className='d-flex align-items-center justify-content-center border mt-5 rounded'
    style={{ width: "500px", height: "120px", background:"#E1F4E5" }}
    >
      <img src="Success Micro-interaction.gif" alt=""
      style={{width: "105px", height:"100px"}}
      className='rounded-circle'
       />
      <span className='fw-bold'>Your request has been accepted for <Link>{join.job.title}</Link> </span>
    </div>
  )
}

export default JobAccepted
