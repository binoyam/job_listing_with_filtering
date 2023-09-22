import React from "react";
import Job from "./Job";

function JobList({ data }) {
  // console.log(data)
  return (
    <>
      {data.map((d) => {
        return <Job key={d.id} data={d} />
      })}
     
    </>
  );
}

export default JobList;
