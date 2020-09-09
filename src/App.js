import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
      </Switch>

      </Router>

    </div>
  );
}

export default App;
