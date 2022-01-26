import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <button className={classes.icon}>
        <Link to="/">Study Bubble</Link>
      </button>

      {/* Home, About, Contact links */}
      <div className={classes.nav_menu}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

    {/* Middle text and background pic */}
      <section className={classes.home_main}>
        <div className={classes.container2}>
          <h1>Studying Outside?</h1>
          <h2>StudyBubble will burst with some awesome locations</h2>
          <p>Providing the best place to study in peace</p>
        </div>
      </section>

      {/* Login, Signup buttons */}
      <nav>
        <ul>
          <div className={classes.login}>
            <button>
              <Link to="/login">Log In</Link>
            </button>
          </div>
          <div className={classes.signup}>
            <button>
              <Link to="/signup">Sign up</Link>
            </button>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
