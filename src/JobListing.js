import React, { useState } from 'react'
import jsonData from './data.json'
function JobListing() {

    const [jobList, setJobList] = useState([...jsonData])

    return (
        <>
            {jobList.map((job) => (
                <div className="job-listing" key={job.id}>
                    <div className="job">
                        <img src={job.logo} alt={job.company} />
                        <div className="job-info-div">
                            <p className="company">{job.company}</p>
                            <p className="position">{job.position}</p>
                            <div className="job-info">
                                <span className='posted-at'>{job.postedAt}</span>
                                <span className='contract'>{job.contract}</span>
                                <span className='location'>{job.location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="role-languages">
                        <span>{job.languages}</span>
                    </div>
                </div>
            ))}
        </>
    )
}

export default JobListing