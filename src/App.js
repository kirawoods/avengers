import React from "react";
import "./App.css";
import { AvengerList } from "./components/AvengersList";
import { Home } from "./components/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Route exact path="/" component={Home} />
        <Route path="/avengers" component={AvengerList} />
      </div>
    </Router>
  );
}

export default App;
