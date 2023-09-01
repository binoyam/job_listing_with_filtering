import React from 'react'

const  Job = (props) => {
  return (
    <div className="job-container">
      {props.data.company}
    </div>
  )
}

export default Job