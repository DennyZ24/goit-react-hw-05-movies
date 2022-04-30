import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getCast } from 'services/fitchMovieApi';
import placeholder from 'placeholder/placeholder.png'

export default function Cast() {
  const [cast, setCast] = useState(null);
  const {filmId} = useParams();

  useEffect(() => { 
    getCast(filmId).then(data=>setCast(data.cast))
  }, [filmId]);

  return (
    <>
      {cast &&
        <ul>
          {cast.map(actor =>
            <li key={actor.id}>
              <img
                src={actor.profile_path ? `https://image.tmdb.org/t/p/original${actor.profile_path}` : placeholder}
                alt={actor.name} 
                width='130'
                height='180'
                />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>)}
        </ul>}
    </>
  )
}