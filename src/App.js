import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Participant from "./components/Participant";
import Organizer from "./components/Organizer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/>
        <Route exact path="/Participant" component={Participant}/>
        <Route exact path="/Organizer" component={Organizer}/>
      </Switch>

      </Router>

    </div>
  );
}

export default App;
