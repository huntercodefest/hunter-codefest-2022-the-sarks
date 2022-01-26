import classes from "./SearchBar.module.css";
import { createContext, useRef, useState } from "react";
import Script from "react-load-script"; // Import react script library to load Google object

function SearchBar(props) {
  /*global google*/ // To disable any eslint 'google not defined' errors
  var geocoder;
  var map2;
  const inputRef = useRef();
  var lat;
  var long;
  const [enteredInput, setEnteredInput] = useState("11368");

  function initialize() {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng,
    };
    map2 = new google.maps.Map(document.getElementById("searchmap"), mapOptions);
  }

  function codeAddress(event) {
    geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(-34.397, 150.644);
    var mapOptions = {
      zoom: 8,
      center: latlng,
    };
    map2 = new google.maps.Map(document.getElementById("searchmap"), mapOptions);

    event.preventDefault();
    geocoder.geocode({ address: inputRef.current.value }, callback);
  }

  function callback(results, status) {
    if (status == "OK") {
      //console.log("lat:", results[0].geometry.location.lat());
      //console.log("long:", results[0].geometry.location.lng());
      //lat = results[0].geometry.location.lat();
      //long = results[0].geometry.location.lng()
      //setLat(results[0].geometry.location.lat());
      //setLng(results[0].geometry.location.lng());
      //console.log("lat:", lat);
      //console.log("long:", long);
      props.setLat(parseFloat(results[0].geometry.location.lat()));
      props.setLng(parseFloat(results[0].geometry.location.lng()));
      props.newSearch();
      //props.newSearch();
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  } 

  return (
    <div className={classes.search}>
      <Script
        url="https://maps.googleapis.com/maps/api/js?key=AIzaSyD33Yq8lvht-zLtDCh01CBnavxUeb-_4kE&libraries=places"
        onLoad={initialize}
      />
      <div id="searchmap"></div>
      <form className={classes.search} onSubmit={codeAddress}>
        <input
          id="address"
          placeholder="Enter address or zip code"
          type="textbox"
          ref={inputRef}
        />
        <button onClick={codeAddress} >Go</button>
      </form>
    </div>
  );
}

export default SearchBar;

/*
  const inputRef = useRef();
  const [enteredInput, setEnteredInput] = useState("");

  function submitHandler(event) {
    event.preventDefault();
    setEnteredInput(inputRef.current.value);
  }

  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <input
        type="text"
        required
        id="title"
        placeholder="Enter Zip Code"
        ref={inputRef}
      />
      <button>Go</button>
      <div>{enteredInput}</div>
      {console.log("enteredInput: ", enteredInput)}
    </form>
  );
}
*/
