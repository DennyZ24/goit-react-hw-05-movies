import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom";
import {getMovieByQuery} from 'services/fitchMovieApi'

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const ref = useRef(true);
  
  useEffect(() => {
    if (ref.current === false) {
      return
    }

    if (location?.search !== '') {
      const searchQuery = new URLSearchParams(location.search).get('query');
       getMovieByQuery(searchQuery).then(data => setFilms(data.results));
    }
    ref.current = false;

    return ()=>{setQuery('')}
  }, [location.search]);
  

  const handleChange = (e) => { 
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (query!=='') {
      getMovieByQuery(query).then(data => setFilms(data.results));
    }

    navigate({...location, search: `query=${query}`});
  }


  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='searchValue'
          className =''
          type="text"
          value={query}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
        />

        <button type="submit">
          search
        </button>
      </form>

      {films && films.length === 0 && <p>Извините, фильмы по запросу который вы сделали не найдены</p>}

      {films && <ul>
        {films.map(film => <li key={film.id}>
        <Link to={`${film.id}`} state={location}>{film.title}</Link>
      </li>)}
      </ul>}
    </div>
    
  )
}