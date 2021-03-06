import React, {  useState } from "react"


export default function Participant(){

    const [lat,setLat] = useState("");
    const [lon,setLon] = useState("");

    navigator.geolocation.watchPosition(function(e){
        setLat(e.coords.latitude)
        setLon(e.coords.longitude)
    })

    return(
        <div>
            <p>LAT : {lat}</p>
            <p>LON : {lon}</p>
        </div>
    )
}