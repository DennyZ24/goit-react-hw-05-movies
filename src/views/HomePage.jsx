import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as fetchMovieApi from 'services/fitchMovieApi';

export default function HomePage() {
  const [trandingFilms, setTrandingFilms] = useState(null);
  const location = useLocation();

  useEffect(() => { 
    fetchMovieApi.getTrandingMovie().then(data=>setTrandingFilms(data.results));
  }, []);

  return (
    <>
      <h1>Tranding this week</h1>

      {trandingFilms &&
        <ul>
        {trandingFilms.map(film => 
          <li key={film.id}>
            <Link to={`movies/${film.id}`} state={location}>{film.title}</Link>
          </li>
        )}
      </ul>}
    </>
  )
}