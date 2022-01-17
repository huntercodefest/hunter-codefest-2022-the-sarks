import StudyLocation from "./StudyLocation";
import classes from "./StudyList.module.css";

function StudyList(props) {
  return (
    <ul className={classes.list}>
      {props.locationlist.map((location) => {
        return (
          <StudyLocation
            key={location.id}
            id={location.id}
            name={location.name}
            image={location.image}
            address={location.address}
            rating={location.rating}
            description={location.description}
            longitude={location.longitude}
            latitude={location.latitude}
            resetLocation={props.resetLocation}
            setLong={props.setLong}
            setLat={props.setLat}
            setZoom={props.setZoom}
          />
        );
      })}
    </ul>
  );
}

export default StudyList;
