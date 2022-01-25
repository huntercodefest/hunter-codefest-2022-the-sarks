import StudyLocation from "./StudyLocation";
import classes from "./StudyList.module.css";
import { Map, GoogleApiWrapper } from "google-map-react";
import { useState } from "react";
//Google API key: AIzaSyD33Yq8lvht-zLtDCh01CBnavxUeb-_4kE
//Yelp API key: FJcuXOHgPwcBhHe57NTsfPSzmJuCyCgRnJ3Q0F-Kf87irFmTsNDeBclp3NGNMT50l8QkAHJ_1lCnFNbElp2Rzv3qDHM8Af4lOv7L2XLmg13gRnHWX9b9EGyd3i3qYXYx

//<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD33Yq8lvht-zLtDCh01CBnavxUeb-_4kE&libraries=places"></script>

function StudyList(props) {
  return (
    <ul className={classes.list}>
      {props.locationList.map((location) => {
        return (
          <StudyLocation
            key={location.place_id}
            id={location.place_id}
            name={location.name}
            image={location.photos[0].getUrl()}
            address={location.formatted_address}
            rating={location.rating}
            user_ratings_total={location.user_ratings_total}
            longitude={location.geometry.location.lng()}
            latitude={location.geometry.location.lat()}
            resetLocation={props.resetLocation}
            setLng={props.setLng}
            setLat={props.setLat}
            setZoom={props.setZoom}
            goToLocation={props.goToLocation}
          />
        );
      })}
    </ul>
  );
}

export default StudyList;

/*function initMap() {
    // Create the map.
    const pyrmont = { lat: -33.866, lng: 151.196 };
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: pyrmont,
      zoom: 17,
      mapId: "8d193001f940fde3",
    });
    // Create the places service.
    const service = new window.google.maps.places.PlacesService(map);
    let getNextPage;
    const moreButton = document.getElementById("more");

    moreButton.onclick = function () {
      moreButton.disabled = true;
      if (getNextPage) {
        getNextPage();
      }
    };

    // Perform a nearby search.
    service.nearbySearch(
      { location: pyrmont, radius: 500, type: "store" },
      (results, status, pagination) => {
        if (status !== "OK" || !results) return;

        addPlaces(results, map);
        moreButton.disabled = !pagination || !pagination.hasNextPage;
        if (pagination && pagination.hasNextPage) {
          getNextPage = () => {
            // Note: nextPage will call the same handler function as the initial call
            pagination.nextPage();
          };
        }
      }
    );
  }

  function addPlaces(places, map) {
    const placesList = document.getElementById("places");

    for (const place of places) {
      if (place.geometry && place.geometry.location) {
        const image = {
          url: place.icon,
          size: new window.google.maps.Size(71, 71),
          origin: new window.google.maps.Point(0, 0),
          anchor: new window.google.maps.Point(17, 34),
          scaledSize: new window.google.maps.Size(25, 25),
        };

        new window.google.maps.Marker({
          map,
          icon: image,
          title: place.name,
          position: place.geometry.location,
        });

        const li = document.createElement("li");

        li.textContent = place.name;
        placesList.appendChild(li);
        li.addEventListener("click", () => {
          map.setCenter(place.geometry.location);
        });
      }
    }
  }*/
