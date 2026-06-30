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
  const links = screen.getAllByRole('link');
  expect(links).toHaveLength(3);
  expect(links.map((link) => link.getAttribute('href'))).toEqual([
    '/advise',
    '/sponsor',
    '/we-create',
  ]);
});
