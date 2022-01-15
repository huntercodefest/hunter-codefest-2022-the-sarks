import StudyLocation from "./StudyLocation";
import classes from "./StudyList.module.css";

function StudyList(props) {
  return (
    <ul>
      {props.locationlist.map(location => {
          return <StudyLocation
            key={location.id}
            id={location.id}
            name={location.name}
            image={location.image}
            address={location.address}
            rating={location.rating}
            description={location.description}/>;
      })}
    </ul>
  );
}

export default StudyList;
