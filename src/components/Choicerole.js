import React from "react"
import { BrowserRouter as Router, Route, Switch, Link ,Redirect} from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

 function Choicerole(){
    
    return(
        <>
            { localStorage.getItem("UserId") ? "" : <Redirect to="/Login"/> }
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