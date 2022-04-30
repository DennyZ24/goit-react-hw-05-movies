import { Suspense } from "react";
import { useEffect, useState } from "react";
import { useParams, Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import MovieDetailsCard from "components/MovieDetailsCard/MovieDetailsCard";
import { getMovieById } from 'services/fitchMovieApi';
import s from "views/MovieDetailsPage/MovieDetailsPage.module.css";

export default function MoviesDetailsPage() {
  const [film, setFilm] = useState(null);
  const { filmId } = useParams();

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => { 
    getMovieById(filmId).then(setFilm);
}, [filmId]);

  const goBackClick = () => {
    navigate(location?.state ?? '/')
  };
  
  return (
    <>
      {film &&
        <div>
          <button type="button" onClick={goBackClick}>Go Back</button>
          <MovieDetailsCard film={film}/>
          <div className={s.moreInfoBlock}>
            <ul>
              <li>
                <Link to='cast' state={location.state}>Cast</Link>
              </li>
              <li>
                <Link to='reviews' state={location.state}>Reviews</Link>
              </li>
            </ul>
          </div>
          <Suspense fallback={<p>Loading...</p>}>
            <Outlet/>
          </Suspense>
        </div>}
    </>
  )
}