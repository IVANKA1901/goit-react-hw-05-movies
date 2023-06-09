import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkIcon = styled(NavLink)`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: rgb(183, 175, 173);
  text-decoration: none;
  font-weight: 500;
  padding: 8px 30px;
  margin-bottom: 20px;
  color: black;
  box-shadow: 0 5px 10px rgba(1, 1, 1, 1);

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    opacity: 1;
    scale: 1.2;
  }
`;

export const Icon = styled.span`
  display: inline-block;
  width: 32px;
  height: 32px;
  background-image: url('https://cdn-icons-png.flaticon.com/512/545/545680.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: 0;
  outline: none;
  cursor: pointer;

  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    opacity: 1;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const Tittle = styled.h1`
  font-size: 50px;
  color: #ffdbdb;
  text-shadow: rgb(0 0 0) 2px 2px 4px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-left: 100px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const TittleText = styled.span`
  font-weight: 700;
`;

export const SecondTittle = styled.h2`
  font-weight: 700;
`;

export const MoreInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-top: 1px solid black;

  margin-top: 20px;
`;

export const MoreInfoTittle = styled.h2`
  margin-top: 20px;
  font-size: 30px;
`;

export const MoreButtonList = styled.ul`
  display: flex;
  gap: 10px;
`;

export const LinkButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #a65e51;
  color: black;
  margin-top: 15px;
  margin-bottom: 15px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: white;
    background-color: #a65e51;
  }
`;
