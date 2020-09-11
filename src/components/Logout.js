import React, { createRef } from "react"
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";

function Logout(){
    const history =  useHistory();

    const deco = (e) =>{
        localStorage.removeItem("UserId")
        localStorage.removeItem("Pseudo")
    }
    return(
        <>
            <Link to="/Login"className="link-login" onClick={ (e) => deco(e)}>Logout </Link>
        </>
    )
}
export default Logout