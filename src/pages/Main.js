import classes from "./Main.module.css";
import { useState } from "react";
import SearchResults from "../components/studylocations/SearchResults";

function MainPage() {
  //const [lat, setLat] = useState(40.6284755);
  //const [long, setLng] = useState(-73.9881622);

  return (
    <div>
      <SearchResults />
    </div>
  );
}

export default MainPage;
//<SearchResults lat={lat} long={long}/>