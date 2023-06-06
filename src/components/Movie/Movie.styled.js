import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  /* padding: 2px; */
  border-radius: 5px;
  color: black;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: black;
    background-color: white;
    transform: scale(1.1);
    box-shadow: 0 5px 10px rgba(1, 1, 1, 1);
  }
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 70px) / 3);
`;

export const MovieName = styled.p`
  padding: 10px;
  font-size: 20px;
  font-weight: 500;
  margin-top: 10px;
  color: black;
  background-color: beige;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgb(28 27 27);
`;
