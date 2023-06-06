import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/Api';

import {
  List,
  Item,
  Info,
  UserName,
  DateCreate,
  Comment,
} from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState({});

  const { id } = useParams();

  useEffect(() => {
    try {
      fetchMoviesReviews(id).then(data => {
        setReviews(data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  if (Object.keys(reviews).length === 0) {
    return <p>Sorry, there is no reviews for this movie!</p>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <List>
        {reviews.length > 0
          ? reviews.map(comment => (
              <Item key={comment.id}>
                <Info>
                  <UserName>{comment.author}</UserName>

                  <DateCreate>
                    {new Date(comment.updated_at).toLocaleDateString()}
                  </DateCreate>
                </Info>

                <Comment>{comment.content}</Comment>
              </Item>
            ))
          : "Sorry, we don't have any review for this movie"}
      </List>
    </div>
  );
};

export default Reviews;
