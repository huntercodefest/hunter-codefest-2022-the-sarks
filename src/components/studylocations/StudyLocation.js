import classes from "./StudyLocation.module.css";

function StudyLocation(props) {
  return (
    <div className={classes.card}>
      <div className={classes.name}>{props.name}</div>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <address>Address: {props.address}</address>
      <div className={classes.description}>Description: {props.description}</div>
      <div>Rating: {props.rating}</div>
    </div>
  );
}

export default StudyLocation;
