import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import data from "./data.json";
import Filter from "./components/Filter";

function App() {
  const [filterKeyWords, setFilterKeyWords] = useState([]);
  console.log(data)
  const addFilterKeywords = (data) => {
    if (!filterKeyWords.includes(data)) {
      setFilterKeyWords([...filterKeyWords, data]);
    }
  };
  const deleteKeyword = (data) => {
    const newKeyWords = filterKeyWords.filter((key) => key !== data);
    setFilterKeyWords(newKeyWords);
  };
  const clearAll = () => {
    setFilterKeyWords([]);
  };
  return (
    <div className="App">
      <Header />

      {filterKeyWords.length > 0 && (
        <Filter
          keyWords={filterKeyWords}
          deleteKeyWords={deleteKeyword}
          clearAll={clearAll}
        />
      )}
      
      <main className="jobs-container-div">
        <JobList
          data={data}
          keyWords={filterKeyWords}
          setKeyWords={addFilterKeywords}
        />
      </main>
    </div>
  );
}

export default App;
