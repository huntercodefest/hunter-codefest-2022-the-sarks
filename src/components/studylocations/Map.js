import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import ReactMapGL, { Marker } from 'react-map-gl';
import classes from "./Map.module.css";

function Map(props) {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoia2Vua28xMjkwIiwiYSI6ImNreWdmaWJtaDBrbncybm82ZGN3M2Q1NGkifQ.1fY1PNHGBXPVkdIeX4DWRg";
  const mapContainer = useRef(null);
  const map = useRef(null);

  //const [lng, setLng] = useState(-74.0060);
  //const [lat, setLat] = useState(40.7128);
  //const [zoom, setZoom] = useState(10);

  const [lat, setLat] = useState(props.lat);
  const [long, setLong] = useState(props.long);
  const [zoom, setZoom] = useState(props.zoom);

  /*function changeCoord() {
    setLat(props.lat);
    setLong(props.long);
  }*/

  //setLat(props.lat);
  //setLng(props.long);

  useEffect(() => {
    //if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [long, lat],
      zoom: zoom,
    });
  });

  useEffect(() => {
    setLong(props.long);
    setLat(props.lat);
    setZoom(props.zoom);
  });

  //const marker1 = new mapboxgl.Marker();
    //marker1.setLngLat([long, lat]).addTo(map);

  return (
    <div>
      <div ref={mapContainer} className={classes.mapcontainer}></div>
    </div>
  );
}

export default Map;
