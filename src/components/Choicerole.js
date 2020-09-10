import React from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

 function Choicerole(){
    
    return(
        <>
            <Header/>
            <div className="choice-role">
                <Link to="/Course-Participant">Participant</Link>
                <Link to="/Course-Organizer">Organizer</Link>
            </div>
            <Footer/>
        </>
    )
}

export default Choicerole