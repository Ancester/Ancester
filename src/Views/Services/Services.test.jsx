import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Services from './Services';

test('renders services title and three service links', () => {
  render(
    <BrowserRouter>
      <Services />
    </BrowserRouter>
  );
  expect(screen.getByText('services.title')).toBeInTheDocument();
});
