import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as fetchMovieApi from 'services/fitchMovieApi';

export default function HomePage() {
  const [trandingFilms, setTrandingFilms] = useState(null);

  useEffect(() => { 
    fetchMovieApi.getTrandingMovie().then(data=>setTrandingFilms(data.results));
  }, []);
  return (
    <>
      <h1>Tranding this week</h1>

      {!trandingFilms && <h2>Loading ...</h2>}

      {trandingFilms &&
        <ul>
        {trandingFilms.map(film => 
          <li key={film.id}>
            <Link to={`movies/${film.id}`}>{film.title}</Link>
          </li>
        )}
      </ul>}
    </>
  )
}