import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarouselComponent from './Carousel';

test('renders carousel with learning platform caption', () => {
  render(
    <BrowserRouter>
      <CarouselComponent />
    </BrowserRouter>
  );
  // react-responsive-carousel may render slides multiple times for infinite loop,
  // so use getAllByText and check that at least one exists
  const platformTexts = screen.getAllByText('academy.learningPlatform');
  expect(platformTexts.length).toBeGreaterThanOrEqual(1);
  
  const gameTexts = screen.getAllByText('carousel.tryGame');
  expect(gameTexts.length).toBeGreaterThanOrEqual(1);
});
