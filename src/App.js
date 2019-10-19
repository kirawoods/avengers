import React from "react";
import "./App.css";
import { AvengerList } from "./components/AvengersList";
import { Home } from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          <Link className="navbar-item" to="/avengers">
            Avenger List
          </Link>
        </div>
        <Route exact path="/" component={Home} />
        <Route path="/avengers" component={AvengerList} />
      </div>
    </Router>
  );
}

export default App;
