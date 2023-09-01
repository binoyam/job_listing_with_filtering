import data from './data.json'
import Jobs from './components/Jobs'
import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [filterKeywords, setFilterKeywords] = useState([])

  const addFilterKeywords = (data) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
    }
  };

  const deleteKeyword = (data) => {
    const newKeywords = filterKeywords.filter((key) => key !== data);
    setFilterKeywords(newKeywords);
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };

  return (
    <div>
      <div className="header"></div>
      {filterKeywords.length > 0 && <Header keyWords={filterKeywords} />}
      <Jobs data={data} />
    </div>


  )
}

export default App