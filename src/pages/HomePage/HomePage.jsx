import {useEffect, useState} from "react";
import {trendReq} from "../../Servises API/API";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";
import css from "./HomePage.module.css";

export default function HomePage() {
  const [loading, setIsloading] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function fetchFilms() {
      try {
        setIsloading(true);
        const res = await trendReq();
        console.log(res);
        setFilms(res);
      } catch (error) {
        console.log(error);
      } finally {
        setIsloading(false);
      }
    }
    fetchFilms();
  }, []);

  return (
    <main>
      <h1 className={css.hometitle}>Trending today</h1>
      {loading && <Loader />}
      {films && <MovieList films={films} />}
    </main>
  );
}
