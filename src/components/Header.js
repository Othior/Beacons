import React, { createRef } from "react"
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Logout from "./Logout"

export default function Header(){
    
    return(
        <>
        <header>
            <Link className="title-link" to="/">
                Beacons Hunt
            </Link>

            { localStorage.getItem("UserId") ? <Logout/> : ""}
        </header>
        </>
    )
}