import logo from "./logo.svg";
import "./App.css";
function App() {
  return (
    <div className="App">
      <div className="parent">
        <div className="child1">
          <div>
            <h1>MyChatApp</h1>
          </div>
          <div>by 026_ganesh Palve-026</div>
        </div>
        <div className="child2">
          <div>
            {" "}
            <input
              className="child1_1"
              type="text"
              placeholder="lets chat here"
            ></input>{" "}
          </div>
          <div>
            <input className="child1_2" type="button" value="send"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
