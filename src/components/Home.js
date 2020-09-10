import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./Footer";
import Maps from "./Maps";
import Balise from "./Balise";

export default function Home() {
    const [lat,setLat] = useState("");
    const [lon,setLon] = useState("");

    navigator.geolocation.watchPosition(function(e){
        setLat(e.coords.latitude)
        setLon(e.coords.longitude)
    })

    
    return (
        <>
        <header>
            <Link className="title-link" to="/">
                Beacons Hunt
            </Link>
            <div className="link-item">
                <Link className="link-register" to="/Register"> Register </Link>
                <Link className="link-login" to="/Login"> Login </Link>
            </div>     
        </header>
            <div className="container">
                <p>
                    Bienvenue dans Beacons Hunt. Le but est très simple : choisis un parcours, attrape ton téléphone et trouve toutes les balises près de chez toi !!
                </p>
                <p>
                    Vous devez vous connecter pour commencer à jouer
                </p>
                <main>
                    <div id="map">
                        <Maps lgla={[lat,lon]}>
                            
                        </Maps>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}