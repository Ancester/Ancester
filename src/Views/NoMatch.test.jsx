import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NoMatch from './NoMatch';

test('renders 404 message and home link', () => {
  render(
    <BrowserRouter>
      <NoMatch />
    </BrowserRouter>
  );
  expect(screen.getByText('notFound.message')).toBeInTheDocument();
  expect(screen.getByText('notFound.home')).toBeInTheDocument();
});
