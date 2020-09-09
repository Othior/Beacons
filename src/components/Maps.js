import React, { createRef } from "react";
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Balise from "./Balise";

export default function Maps (props){
  return(
    <Map center={props.lgla} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Balise lgla={ props.lgla } text="Vous êtes sur minecraft" />
    </Map>
  )
}



