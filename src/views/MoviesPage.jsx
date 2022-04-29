import { useState } from "react"
import { Link } from "react-router-dom";
import {getMovieByQuery} from 'services/fitchMovieApi'

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [films, setFilms] = useState(null);

  const handleChange = (e) => { 
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    getMovieByQuery(query).then(data => setFilms(data.results));
    
    setQuery('')
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

      

      {films && <ul>
        {films.map(film => <li key={film.id}>
        <Link to={`${film.id}`}>{film.title}</Link>
      </li>)}
      </ul>}
    </div>
    
  )
}