import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { List, Item, Info } from './Cast.styled';
import { fetchMoviesCast } from 'services/Api';

const Cast = () => {
  const [cast, setCast] = useState({});

  const { id } = useParams();

  useEffect(() => {
    try {
      fetchMoviesCast(id).then(data => {
        setCast(data.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (Object.keys(cast).length === 0) {
    return <p>Sorry, there is no information about cast for this movie!</p>;
  }

  return (
    <List>
      {cast.map(({ id, profile_path, character, original_name }) => (
        <Item key={id}>
          <img
            width="130"
            height="140"
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : `https://wipfilms.net/wp-content/data/posters/tt0338683.jpg`
            }
            alt={original_name}
          />
          <Info>
            <h3>{original_name ? original_name : 'No Information'}</h3>
            <p>
              <b>Character: </b> {character ? character : 'No Information'}
            </p>
          </Info>
        </Item>
      ))}
    </List>
  );
};

export default Cast;
