import axios from 'axios';

const API_KEY = 'f796c87b999028931b2db4dbe3fd1c94';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
  return response.data;
};

export const fetchMoviesByName = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );
  return response.data;
};

export const fetchMoviesById = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesCast = async id => {
  const response = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

export const fetchMoviesReviews = async id => {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};

///////////////got from documentation axios instance
// const instance = axios.create({
//   baseURL: 'https://api.themoviedb.org/3',
//   params: {
//     api_key: 'f796c87b999028931b2db4dbe3fd1c94',
//   },
// });

// const fetchTrendingMovies = () => instance.get(`/trending/movie/day`);

// const fetchMoviesByName = query =>
//   instance.get(`/search/movie`, { params: { query } });

// const fetchMoviesById = id => instance.get(`/movie/${id}`);

// const fetchMoviesCast = id => instance.get(`/movie/${id}/credits`);

// const fetchMoviesReviews = id => instance.get(`/movie/${id}/reviews`);

// export const api = {
//   fetchMoviesById,
//   fetchMoviesByName,
//   fetchMoviesCast,
//   fetchTrendingMovies,
//   fetchMoviesReviews,
// };
