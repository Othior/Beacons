import React, { createRef } from "react"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


export default function Header(){
    
    return(
        <>
        <header>
            <Link className="title-link" to="/">
                Beacons Hunt
            </Link>
        </header>
        </>
    )
}