import React from 'react';
import { render, screen } from '@testing-library/react';
import WeCreate from './WeCreate';

test('renders we-create page with header and info sections', () => {
  render(<WeCreate />);
  expect(screen.getByText('services.weCreateHeader')).toBeInTheDocument();
  expect(screen.getByText('services.requirements')).toBeInTheDocument();
  expect(screen.getByText('services.moreInfo')).toBeInTheDocument();
});
