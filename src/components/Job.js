import React, { useState, useEffect } from "react";

function Job(props) {
  const [icon, setIcon] = useState("");
  //   console.log(props.data);
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,
    position,
    postedAt,
    role,
    tools,
  } = props.data;
  const jobSpecs = [role, level, ...languages, ...tools];

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
    <div className={featured ? "job featured-job" : "job"}>
      <div className="left">
        <div className="job-logo">
          {icon && <img src={icon} alt={company + "'s logo"} />}
        </div>
        <div className="job-info-div">
          <div className="company-info">
            <span className="company-name">{company}</span>
            {props.data.new && <span className="new">New!</span>}
            {props.data.featured && <span className="featured">Featured</span>}
          </div>
          <div className="position">{position}</div>
          <div className="details">
            <span>{postedAt}</span>
            <span className="separator">&nbsp;•&nbsp;</span>
            <span> {contract}</span>
            <span className="separator">&nbsp;•&nbsp;</span>
            <span>{location}</span>
          </div>
        </div>
      </div>
      <div className="skills-div">
        {jobSpecs.map((key, id) => (
          <span
            className="job-specs"
            onClick={() => props.setKeyWords(key)}
            key={id}
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Job;
