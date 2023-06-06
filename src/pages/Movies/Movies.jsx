import React, { useEffect, useState } from 'react';
import SearchBox from '../../components/SearchBox/SearchBox';
import Container from '../../components/Container/Container';
import MovieList from 'components/Movie/MovieList/MovieList';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesByName } from '../../services/Api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  useEffect(() => {
    if (query) {
      try {
        fetchMoviesByName(query).then(data => {
          if (data.results.length === 0) {
            setSearchParams('');
          }
          setMovies(data.results);
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query, setSearchParams]);

  const handleSubmit = query => {
    setQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <main>
      <Container>
        <SearchBox onSubmit={handleSubmit} query={query} />
        {movies.length > 0 && <MovieList movies={movies} />}
      </Container>
    </main>
  );
};

export default Movies;
