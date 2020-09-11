import React from 'react'
import L from 'leaflet'
import { Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import mark from '../assets/Balise.png'

const pointer = new L.Icon({
    iconUrl: mark,
    iconSize: [35, 50]
})

function Balise(props) {
    return (
        <Marker icon={pointer} position={props.lgla}>
            <Popup>{props.text}</Popup>
        </Marker>
    )
}

export default Balise