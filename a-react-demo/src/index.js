import React, { unstable_ConcurrentMode as ConcurrentMode } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const rootEl = document.getElementById("root");
// ReactDOM.render(, rootEl)
const root = ReactDOM.unstable_createRoot(rootEl);

root.render(<App />);
// ReactDOM.render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
