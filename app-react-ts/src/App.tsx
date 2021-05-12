import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "components";

namespace JSX {
  interface IntrinsicElements {
    "my-component": {
      "full-name": string;
    };
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <my-component full-name="Apple" />
        <my-component fullName="Banana" />
        <my-component fullname="Coconut" />
        <my-component full_name="Durian" />
      </header>
    </div>
  );
}

export default App;
