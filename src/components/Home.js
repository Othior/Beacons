import React,{useState} from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Footer from "./Footer";
import Maps from "./Maps";
import Balise from "./Balise";
import Logout from "./Logout";

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
                
                {
                    localStorage.getItem("UserId") ? <Logout /> :<div>
                        <Link className="link-register" to="/Register"> Register </Link>
                        <Link className="link-login" to="/Login"> Login </Link>
                    </div>
                }

            </div>     
        </header>
            <div className="container">
                <p>
                    Welcome to Beacons Hunt. The goal is very simple: choose a Course, grab your phone and find all the beacons near you !!
                </p>
                <p>
                    You must log in to start playing
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