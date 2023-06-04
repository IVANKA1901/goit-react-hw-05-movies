import React from 'react';
import { NavLink } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import Container from '../../components/Container/Container';

const Movies = () => {
  return (
    <main>
      <Container>
        <SearchBox />
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
      </Container>
    </main>
  );
};

export default Movies;
