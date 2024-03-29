import {NavLink} from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  return (
    <header className={css.header}>
      <nav>
        <ul className={css.listlink}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/MoviesPage">
            Movies
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
