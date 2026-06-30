import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import KnowUs from './KnowUs';

test('renders know-us page with team, values, and projects sections', () => {
  render(
    <MemoryRouter initialEntries={['/know-us']}>
      <Routes>
        <Route path="/know-us/*" element={<KnowUs />} />
      </Routes>
    </MemoryRouter>
  );
  expect(screen.getByText('knowUs.team')).toBeInTheDocument();
  expect(screen.getByText('knowUs.values')).toBeInTheDocument();
  expect(screen.getByText('knowUs.projects')).toBeInTheDocument();
});
