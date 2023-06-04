import React from 'react';
import PropTypes from 'prop-types';
import { Item, Link, MovieName } from '../Movie.styled';

function MovieItem({ id, title, poster_path }) {
  const viewPoster = poster_path => {
    if (poster_path === null) {
      return 'https://wipfilms.net/wp-content/data/posters/tt0338683.jpg';
    }
    return `https://image.tmdb.org/t/p/w300${poster_path}`;
  };

  return (
    <Item>
      <Link to={`/movies/${id}`}>
        <img
          src={`${viewPoster(poster_path)}`}
          alt={title}
          width="300"
          height="450"
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
