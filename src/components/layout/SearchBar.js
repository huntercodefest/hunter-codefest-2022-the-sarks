import classes from "./SearchBar.module.css";
import { Map, GoogleApiWrapper } from "google-map-react";
//Google API key: AIzaSyD33Yq8lvht-zLtDCh01CBnavxUeb-_4kE

function SearchBar() {
  function submitHandler(event) {
    event.preventDefault();
  }

  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <input type="text" required id="title" placeholder="Enter Zip Code" />
      <button>Go</button>
    </form>
  );
}

export default SearchBar;
