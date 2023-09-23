import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import JobList from "./components/JobList";
import data from "./data.json";

function App() {
  const [filterKeyWords, setFilterKeyWords] = useState([]);

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
      <Header
        keyWords={filterKeyWords}
        deleteKeyWords={deleteKeyword}
        clearAll={clearAll}
      />
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
