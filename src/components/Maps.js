import React from "react";
import { Map, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import Balise from "./Balise";

export default function Maps(props) {
  return (
    <Map onclick={props.clickBalise} center={props.lgla} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <Balise lgla={props.lgla} text="Vous êtes Ici" />
      {props.children}
    </Map>
  )
}



