import "./App.css";
import Header from "./components/Header";
import JobList from "./components/JobList";
import data from './data.json'

function App() {

  return (
    <div className="App">
      <Header />
      <main className="jobs-container-div">
        <JobList data={data} />
      </main>
    </div>
  );
}

export default App;
