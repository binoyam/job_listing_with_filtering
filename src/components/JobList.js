import React from 'react'
import JobData from '../data.json'

function JobList() {


  return (
    {JobData.map((job) => (
    <div className="job">
          <div className="left">
            <div className="job-logo">
              <img src="./images/photosnap.svg" alt="" />
            </div>
            <div className="job-info-div">
              <h4>
                {job.company}
                <span>New!</span>
                <span>Featured</span>
              </h4>
              <h3>Senior Frontend Developer</h3>
              <p>
                <span> 1d ago</span>
                <span> Full Time</span>
                <span> USA only</span>
              </p>
            </div>
          </div>
          <div className="skills-div">
            <span> Frontend</span>
            <span> Senior</span>
            <span> HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>

    )}
  )
}

export default JobList