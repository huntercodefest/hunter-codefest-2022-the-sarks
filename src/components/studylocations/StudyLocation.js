import classes from "./StudyLocation.module.css";

function StudyLocation(props) {
  return (
    <div className={classes.card}>
      <div className={classes.name}>
        {props.name}
        <button
          className={classes.button}
          onClick={() => {
            props.setLat(parseFloat(props.latitude));
            props.setLng(parseFloat(props.longitude));
            props.setZoom(15);
            props.goToLocation();
          }}
        >
          Locate
        </button>
      </div>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <address>Address: {props.address}</address>
      <div>Rating: {props.rating} (based on {props.user_ratings_total} total ratings)</div>
    </div>
  );
}

export default StudyLocation;
