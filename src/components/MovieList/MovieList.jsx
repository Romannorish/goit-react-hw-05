import {Link, useLocation} from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import css from "./MovieList.module.css";

export default function MovieList({films}) {
  const location = useLocation();
  return (
    <div>
      <ul className={css.list}>
        {films.map((film) => {  
          return (
            <li key={film.id} className={css.item}>
              <Link to={`/MoviesPage/${films.id}`} state={{form: location}}></Link>
              <MovieItem film={film} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
