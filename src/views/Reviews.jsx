import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getReviews } from 'services/fitchMovieApi'; 

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();
  
  useEffect(() => {
    getReviews(filmId).then(data => setReviews(data.results));
    
  }, [filmId]);

  return (
    <>
      {reviews.length !== 0 &&
        <ul>
          {reviews.map(review =>
            <li>
              <h4>Author: {review.author}</h4>
              <p>Comment: {review.content}</p>
          </li>)}
        </ul>}
      {reviews.length === 0 && <p>We don't have any review for this movie</p>}
    </>
  )
}