import axios from 'axios';

const KEY = '872d53f6c7f3e40600b60466c31da789';
axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export async function getTrandingMovie() {
  const response = await axios.get(`trending/movie/week?api_key=${KEY}`);
  return response.data;
};

export async function getMovieById(filmId) {
  const response = await axios.get(`movie/${filmId}?api_key=${KEY}`);
  return response.data;
};

export async function getMovieByQuery(query) {
  const response = await axios.get(`search/movie?api_key=${KEY}&query=${query}`);
  return response.data;
};
 
export async function getCast(filmId) {
  const response = await axios.get(`movie/${filmId}/credits?api_key=${KEY}`);

  return response.data;
};

export async function getReviews(filmId) {
  const response = await axios.get(`movie/${filmId}/reviews?api_key=${KEY}`);

  return response.data;
}