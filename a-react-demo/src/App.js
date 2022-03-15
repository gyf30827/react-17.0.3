import "./App.css";
import React, { useEffect, useState } from "react";
class B extends React.Component {
  render() {
    return "5555";
  }
}
function App() {
  // const [a, setA] = useState("1111");
  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("destory");
    };
  });
  return (
    <div className="App">
      {/* <B></B>
      {a}
      <span
        onClick={() => {
          setA(Math.random());
        }}
      >
        333
      </span> */}
    </div>
  );
}

export default App;
