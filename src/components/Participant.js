import React, { createRef } from "react"


export default function Participant(){
    var watchID = navigator.geolocation.watchPosition(function(position) {
        console.log(position.coords.latitude, position.coords.longitude);
    });
    return(
        <div>
            {watchID}
        </div>
    )
}