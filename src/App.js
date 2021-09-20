import logo from './logo.svg';
import './App.css';
import React from "react"
import {AuthCluster} from "./auth-cluster"
import {InitCluster} from "./init-cluster"
import {useCurrentUser} from "./hooks/current-user"

export default function App() {
    const cu = useCurrentUser()

    return (
        <div>
            <AuthCluster />
            <InitCluster address={cu.addr} />
        </div>
    )
}

export default function App() {
    return (
        <div>
            <AuthCluster />
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
