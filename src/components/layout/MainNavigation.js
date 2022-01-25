import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import SearchBar from "./SearchBar";

function MainNavigation() {


  return (
    <header className={classes.header}>
      <button className={classes.icon}>
        <Link to="/">Study Bubble</Link>
      </button>
      <SearchBar/>
      <nav>
        <ul>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/signup">Sign up</Link>
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
