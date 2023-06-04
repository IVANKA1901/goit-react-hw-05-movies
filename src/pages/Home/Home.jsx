import React from 'react';
import { TrendTittle } from './Home.styled';
import Container from '../../components/Container/Container';
import { fetchTrendingMovies } from '../../services/Api';
import { useState, useEffect } from 'react';
import MovieList from '../../components/Movie/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      fetchTrendingMovies().then(data => {
        setMovies(data.results);
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
      </Container>
    </main>
  );
};

export default Home;
