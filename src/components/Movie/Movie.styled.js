import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 10px;
  border-radius: 5px;
  border-radius: 4px;
  color: black;
  font-weight: 500;

  &:hover {
    color: black;
    background-color: #a65e51;
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
`;
