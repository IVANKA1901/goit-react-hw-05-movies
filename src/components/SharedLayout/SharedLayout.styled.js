import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #a65e51;
  }
`;

export const FullPage = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  background-color: #52acff;
  background-image: linear-gradient(75deg, #52acff 25%, #ffe32c 100%);

  text-shadow: 2px 2px 4px rgb(46 43 43 / 80%);
`;
