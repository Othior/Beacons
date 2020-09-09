import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./Footer";
import Maps from "./Maps";

export default function Home() {

    return (
        <div className="container">
        <header>
            <Link className="title-link" to="/">
                Beacons Hunt
            </Link>
            <div className="link-item">
                <Link className="link-register" to="/Register"> Register </Link>
                <Link className="link-login" to="/Login"> Login </Link>
            </div>     
        </header>
        <p>
            Bienvenu dans Beacons Hunt le but est très simple choisis un parcours et attrape ton téléphone et attrape toute les balises tout près de chez toi !!
        </p>
        <p>
            Vous devez vous connecter pour commencer a joué
        </p>
        <main>
            <div id="map">
                <Maps/>
            </div>
        </main>
        <Footer/>
        </div>
    )
}