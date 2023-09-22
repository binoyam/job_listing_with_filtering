import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="jobs-container-div">
        <div className="job">
          <div className="job-logo">
            <img src="./images/photosnap.svg" alt="" />
          </div>
          <div className="job-info-div">
            <h4>
              Photosnap
              <span>New!</span>
              <span>Featured</span>
            </h4>
            <h3>Senior Frontend Developer</h3>
            <p>
              <span> 1d ago</span>
              <span> Full Time</span>
              <span> USA only</span>
            </p>
          </div>
          <div className="skills-div">
            <span> Frontend</span>
            <span> Senior</span>
            <span> HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
