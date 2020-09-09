import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./Footer";
import Maps from "./Maps";

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
                {/* <Link className="link-participant" to="/Participant"> Participant </Link> */}
            </div>     
        </header>
            <div className="container">
                <p>
                    Bienvenu dans Beacons Hunt le but est très simple choisis un parcours et attrape ton téléphone et attrape toute les balises tout près de chez toi !!
                </p>
                <p>
                    Vous devez vous connecter pour commencer a joué
                </p>
                <main>
                    <div id="map">
                        <Maps lgla={[lat,lon]}/>
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    )
}