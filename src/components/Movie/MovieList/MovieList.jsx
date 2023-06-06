import React from 'react';
import { List } from '../Movie.styled';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem/MovieItem';

const MovieList = ({ movies }) => {
  return (
    <List>
      {movies.map(({ id, title, poster_path }) => (
        <MovieItem key={id} id={id} title={title} poster_path={poster_path} />
      ))}
    </List>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};
