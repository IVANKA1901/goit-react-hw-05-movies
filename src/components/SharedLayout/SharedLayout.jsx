import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import Header from '../Header/Header';
import { Nav, Link, FullPage } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <FullPage>
      <Header>
        <Container>
          <Nav>
            <Link to="/">Home 🏠</Link>
            <Link to="/movies">Movies 🎞️</Link>
          </Nav>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </FullPage>
  );
};

export default SharedLayout;
