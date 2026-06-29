import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomeContainer from './HomeContainer';

test('renders home page with hero, features, and social media sections', () => {
  render(
    <BrowserRouter>
      <HomeContainer />
    </BrowserRouter>
  );
  expect(screen.getByText('home.indieSoloDev')).toBeInTheDocument();
  expect(screen.getByText('home.heroTitle')).toBeInTheDocument();
  expect(screen.getByText('home.heroDescription')).toBeInTheDocument();
  expect(screen.getByText('home.weCreate')).toBeInTheDocument();
  expect(screen.getByText('home.wePublish')).toBeInTheDocument();
  expect(screen.getByText('home.weAdvise')).toBeInTheDocument();
  expect(screen.getByText('home.workModel')).toBeInTheDocument();
  expect(screen.getByText('home.socialMedia')).toBeInTheDocument();
});
