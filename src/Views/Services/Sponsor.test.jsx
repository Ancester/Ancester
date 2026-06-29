import React from 'react';
import { render, screen } from '@testing-library/react';
import Sponsor from './Sponsor';

test('renders sponsor page with header and info sections', () => {
  render(<Sponsor />);
  expect(screen.getByText('services.sponsorHeader')).toBeInTheDocument();
  expect(screen.getByText('services.requirements')).toBeInTheDocument();
  expect(screen.getByText('services.moreInfo')).toBeInTheDocument();
});
