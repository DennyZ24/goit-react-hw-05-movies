import placeholder from 'placeholder/placeholder.png'
import s from 'components/MovieDetailsCard/MovieDetailsCard.module.css'

export default function MovieDetailsCard({ film }) {
  return (
    <div className={s.cardWrapper}>
      <div className={s.cardImg}>
        <img src={film.poster_path ? `https://image.tmdb.org/t/p/original${film.poster_path}` : placeholder} alt={film.title} width='300' height='400'/>
      </div>

      <div className={s.cardDiscriptional}>
        <h2>{film.title}</h2>
        <p>Rating: {film.vote_average}</p>
        <h3>Overview</h3>
        <p>{film.overview}</p>
        <h4>Genres</h4>
        <p>{film.genres.map(genre=>genre.name).join(' ')}</p>
      </div>
    </div>
  )
}