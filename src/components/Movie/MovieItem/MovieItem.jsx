import React from 'react';
import PropTypes from 'prop-types';
import { Item, Link, MovieName } from '../Movie.styled';

import { useLocation } from 'react-router-dom';

function MovieItem({ id, title, poster_path }) {
  const location = useLocation();

  return (
    <Item key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w300${poster_path}`
              : `https://wipfilms.net/wp-content/data/posters/tt0338683.jpg`
          }
          alt={title}
          width="250"
          height="350"
        />
        <MovieName>{title}</MovieName>
      </Link>
    </Item>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
