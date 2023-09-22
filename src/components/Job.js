import React, { useState } from "react";

function Job(props) {
  console.log(props);
  const {
    company,
    contract,
    featured,
    id,
    language,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data;

const [icon, setIcon] = useState("")
const importSvg= () =>{
    const 
}


  return (
    <div className="job">
      <div className="left">
        <div className="job-logo">
          <img src={logo} alt="" />
        </div>
        <div className="job-info-div">
          <h4>
            {company}
            <span>New!</span>
            <span>Featured</span>
          </h4>
          <h3>{position}</h3>
          <p>
            <span>{postedAt}</span>
            <span> {contract}</span>
            <span>{location}</span>
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
  );
}

export default Job;
