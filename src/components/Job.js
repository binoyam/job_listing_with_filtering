import React, { useState, useEffect } from "react";

function Job(props) {
  const [icon, setIcon] = useState("");
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

  const importSvgs = async () => {
    try {
      const importedModule = await import(`${logo}`);
      const svgData = importedModule.default;
      setIcon(svgData);
    } catch (error) {
      console.log("Error importing SVG: ", error);
    }
  };
  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div className="job">
      <div className="left">
        <div className="job-logo">
          {icon && <img src={icon} alt={company + "'s logo"} />}
        </div>
        <div className="job-info-div">
          <div className="company-info">
            <span className="company-name">{company}</span>
            <span className="new">New!</span>
            <span className="featured">Featured</span>
          </div>
          <div className="position">{position}</div>
          <div className="details">
            <span>{postedAt}</span>
            <span>&nbsp;•&nbsp;</span>
            <span> {contract}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{location}</span>
          </div>
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
