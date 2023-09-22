import "./App.css";
import Header from "./components/Header";
import JobList from "./components/JobList";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="jobs-container-div">
        <JobList />
      </main>
    </div>
  );
}

export default App;
