import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import { useState } from 'react';
import { fetchMoviesById } from '../../services/Api';

import {
  Box,
  LinkIcon,
  Icon,
  InfoBox,
  Tittle,
  Text,
  TittleText,
  MoreInfoBox,
  MoreInfoTittle,
  MoreButtonList,
  LinkButton,
} from './Movie.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});

  const { id } = useParams();

  const location = useLocation();
  const backLocation = location.state?.from ?? '/';

  // console.log(location);
  // console.log(backLocation);

  useEffect(() => {
    try {
      fetchMoviesById(id).then(data => {
        setMovie(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  const { poster_path, title, vote_average, overview, genres } = movie;

  return (
    <main>
      <Container>
        <LinkIcon to={backLocation}>
          <Icon />
        </LinkIcon>
        <Box>
          <img
            width="300"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : `https://wipfilms.net/wp-content/data/posters/tt0338683.jpg`
            }
            alt={title}
          />
          <InfoBox>
            <Tittle>{title ? title : 'No Information'}</Tittle>
            <Text>
              <TittleText>User Score: </TittleText>
              {vote_average ? Math.round(vote_average * 10) : 0}%
            </Text>
            <Text>
              <TittleText>Overview: </TittleText>
              {overview ? overview : 'No Information'}
            </Text>
            <Text>
              <TittleText>Genres: </TittleText>
              {genres && genres.length > 0
                ? genres.map(value => value.name).join(', ')
                : 'No information'}
            </Text>
          </InfoBox>
        </Box>
        <MoreInfoBox>
          <MoreInfoTittle>Additional information</MoreInfoTittle>
          <MoreButtonList>
            <li>
              <LinkButton to="cast" state={{ from: backLocation }}>
                Cast
              </LinkButton>
            </li>
            <li>
              <LinkButton to="reviews" state={{ from: backLocation }}>
                Reviews
              </LinkButton>
            </li>
          </MoreButtonList>
        </MoreInfoBox>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;
