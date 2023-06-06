import React from 'react';
import { TrendTittle } from './Home.styled';
import Container from '../../components/Container/Container';
import { fetchTrendingMovies } from '../../services/Api';
import { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      fetchTrendingMovies().then(data => {
        setMovies(data.results);
        setIsLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <main>
      <Container>
        <TrendTittle>Trending today</TrendTittle>
        {movies.length > 0 && <MovieList movies={movies} />}
        {isLoading && <Loader />}
      </Container>
    </main>
  );
};

export default Home;
