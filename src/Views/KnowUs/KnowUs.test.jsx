import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import KnowUs from './KnowUs';

test('renders know-us page with team, values, and projects sections', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <KnowUs />
    </MemoryRouter>
  );
  expect(screen.getByText('knowUs.team')).toBeInTheDocument();
  expect(screen.getByText('knowUs.values')).toBeInTheDocument();
  expect(screen.getByText('knowUs.projects')).toBeInTheDocument();
});
