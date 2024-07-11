import "./App.css";
import React from "react";
import Quiz from "./Quiz";

function App() {
  return (
    <>
      <div>
        <h1
          style={{
            backgroundColor: "white",
            padding: "10px",
            margin: "30px",
            borderRadius: "5px",
          }}
        >
          Quiz Application UI
        </h1>
      </div>
      <div className="App">
        <h2>Quiz Title</h2>
        <Quiz></Quiz>
      </div>
    </>
  );
}

export default App;
