import StudyList from "../components/studylocations/StudyList";
import Map from "../components/studylocations/Map";
import classes from "./Main.module.css";
import { useState } from "react";
import Test from "../components/studylocations/gettest";
import Test2 from "../components/studylocations/gettest2";

function MainPage() {
  const locations = [
    {
      id: "1",
      name: "White Noise Coffee Co",
      image:
        "https://ediblequeens.ediblecommunities.com/sites/default/files/styles/ariticle_landscape__322x214_/public/images/article/article_details/White-Noise-Coffee-Shop-Flushing-Queens-2.jpg?itok=kuSEnM4A",
      address: "41-02 162nd St, Flushing, NY 11358",
      rating: "4.3",
      description:
        "Chic, funky craft coffee shop & cafe offering light fare in an artsy space with seating & Wi-Fi.",
      latitude: "40.761289",
      longitude: "-73.8040306",
    },

    {
      id: "2",
      name: "Molasses Books",
      image:
        "https://images.squarespace-cdn.com/content/v1/552d7a52e4b0ede95614e9c8/1498227007215-8K1PB1Q22XF0QWXU80F8/DSC_0077_1.jpg",
      address: "770 Hart St, Brooklyn, NY 11237",
      rating: "4.6",
      description:
        "Used bookstore & cafe where patrons can barter volumes for coffee, beer or more books.",
      latitude: "40.7006193",
      longitude: "-73.9259459",
    },

    {
      id: "3",
      name: "Queens Library - Elmhurst",
      image:
        "https://s3-media0.fl.yelpcdn.com/bphoto/JkP_iNgkV26YewTyaETA8g/1000s.jpg",
      address: "86-07 Broadway Elmhurst, NY 11373",
      rating: "4.3",
      description: "Public library in Queens, New York",
      latitude: "40.738428",
      longitude: "-73.8792888",
    },
  ];

  const [lat, setLat] = useState(40.7284755);
  const [long, setLong] = useState(-73.9881622);
  const [zoom, setZoom] = useState(12);

  function resetLocation() {
    //setlocationPicked(false);
    setLat(40.7284755);
    setLong(-73.9881622);
    setZoom(12);
  }

  /*function goToLocation() {
    setlocationPicked(true);
  }*/

  //<StudyList locationlist={locations} goToLocation={goToLocation} />
  //{locationPicked ? null : <Map lat={lat} long={long} zoom={12} />}
  //{locationPicked ? <Map lat={lat} long={long} zoom={13} /> : null}
  //<Map lat={lat} long={long} zoom={zoom} />
  //Lat: {lat} Long: {long}

  return (
    <section>
      <h1>
        Recommended Results
        <button onClick={resetLocation}>Reset</button>
      </h1>
      <Test/>
    </section>
  );
}

export default MainPage;

/*<div className={classes.main}>
<StudyList
  locationlist={locations}
  setLat={(value) => setLat(value)}
  setLong={(value) => setLong(value)}
  setZoom={(value) => setZoom(value)}
  resetLocation={resetLocation}
/>
</div>*/