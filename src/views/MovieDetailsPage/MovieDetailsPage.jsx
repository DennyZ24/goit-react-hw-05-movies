import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";
import { getMovieById } from 'services/fitchMovieApi';
import s from "views/MovieDetailsPage/MovieDetailsPage.module.css";

export default function MoviesDetailsPage() {
  const [film, setFilm] = useState(null);
  const {filmId} = useParams();
  

  useEffect(() => { 
    getMovieById(filmId).then(setFilm);
  }, [filmId]);
  
  return (
    <>
      {film &&
        <div>
          <MovieDetailsCard film={film}/>
          <div className={s.moreInfoBlock}>
            <ul>
              <li>
                <Link to='cast'>Cast</Link>
              </li>
              <li>
                <Link to='reviews'>Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense>
            <Outlet/>
          </Suspense>
        </div>}
    </>
  )
}