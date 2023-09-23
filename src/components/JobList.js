import React, { useEffect } from "react";
import Job from "./Job";

function JobList({ data, setKeyWords, keyWords }) {
  // console.log(data)
  const [filteredData, setfilteredData] = useState([]);

  const modifiedData = () => {
    if (keyWords) {
      const newData = data.filter((d) => {
        return keyWords.every((key) => {
          return (
            d.role === key ||
            d.level === key ||
            d.languages.includes(key) ||
            d.tools.includes(key)
          );
        });
      });
      setfilteredData(newData);
    }
  };
  useEffect(() => {
    modifiedData();
  }, [keyWords]);
  return (
    <>
      {filteredData.map((d) => {
        return <Job key={d.id} data={d} setKeyWords={setKeyWords} />;
      })}
    </>
  );
}

export default JobList;
