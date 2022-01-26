import StudyList from "./StudyList";
import classes from "./SearchResults.module.css";
import { useState } from "react";
import Script from "react-load-script"; // Import react script library to load Google object
import SearchBar from "../layout/SearchBar";

function SearchResults(props) {
  const [lat, setLat] = useState(40.6284755);
  const [long, setLng] = useState(-73.9881622);
  const [zoom, setZoom] = useState(12);
  const [locationList, setLocationList] = useState([]);
  const [tempList, setTempList] = useState([]);

  /*global google*/ // To disable any eslint 'google not defined' errors
  function initialize() {
    //console.log("lat: ", lat);
    //console.log("long: ", long);
    var temp = new google.maps.LatLng(lat, long);
    var map = new google.maps.Map(document.getElementById("map"), {
      center: temp,
      zoom: 12,
    });

    var request = {
      location: temp,
      radius: "500",
      query: "libraries",
    };

    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }

  function callback(results, status) {
    setTempList([]);
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];

        if (
          typeof place.photos !== "undefined" &&
          place.business_status == "OPERATIONAL"
        ) {
          tempList.push(place);
        }
      }
      setLocationList(tempList);
    }
    //console.log(locationList);
  }

  function goToNYC() {
    setLat(40.6284755);
    setLng(-73.9881622);
    setLocationList([]);
    setZoom(12);
    var temp = new google.maps.LatLng(lat, long);
    var map = new google.maps.Map(document.getElementById("map"), {
      center: temp,
      zoom: 12,
    });

    var request = {
      location: temp,
      radius: "500",
      query: "libraries+coffee places",
    };
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }

  function newSearch() {
    //setLat(25.03428);
    //setLng(-77.39627999999999);
    console.log("lat:", lat);
    console.log("long:", long);
    setLocationList([]);
    setZoom(12);
    var temp = new google.maps.LatLng(lat, long);
    var map = new google.maps.Map(document.getElementById("map"), {
      center: temp,
      zoom: 10,
    });

    var request = {
      location: temp,
      radius: "500",
      query: "libraries",
    };
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }

  function goToLocation() {
    {
      var location = new google.maps.LatLng(lat, long);
      var map = new google.maps.Map(document.getElementById("map"), {
        center: location,
        zoom: zoom,
      });
    }
  }

  function goToMiami() {
    setLat(25.7617);
    setLng(-80.1918);
    //setLat(36.7783);
    //setLng(-119.4179);
    //setLat(0);
    //setLng(0);
    setLocationList([]);
    setZoom(12);
    var temp = new google.maps.LatLng(lat, long);
    var map = new google.maps.Map(document.getElementById("map"), {
      center: temp,
      zoom: 12,
    });
    var request = {
      location: temp,
      radius: "500",
      query: "libraries+coffee shops",
    };
    var service = new google.maps.places.PlacesService(map);
    service.textSearch(request, callback);
  }

  return (
    <section className={classes.main}>
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD33Yq8lvht-zLtDCh01CBnavxUeb-_4kE&libraries=places"
        onLoad={initialize}
      />
      <SearchBar
        setLat={(value) => setLat(value)}
        setLng={(value) => setLng(value)}
        newSearch={newSearch}
      />
      {console.log(locationList)}
      <div className={classes.mapcontainer} id="map"></div>
      <h1 className={classes.listheading}>
        Recommended Results
        <button onClick={goToNYC}>Go to NYC</button>
        <button onClick={goToMiami}>Go To Miami</button>
      </h1>
      <div className={classes.studylist} onChange={initialize}>
        <StudyList
          locationList={locationList}
          goToLocation={goToLocation}
          setLat={(value) => setLat(value)}
          setLng={(value) => setLng(value)}
          setZoom={(value) => setZoom(value)}
        />
      </div>
    </section>
  );
}

export default SearchResults;
