import React from 'react';
import PropTypes from 'prop-types';
import { MainHeader } from './Header.styled';

const Header = ({ children }) => {
  return <MainHeader>{children}</MainHeader>;
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Header;
