import React from 'react';
import { render, screen } from '@testing-library/react';
import Advise from './Advise';

test('renders advise page with header and info sections', () => {
  render(<Advise />);
  expect(screen.getByText('services.adviseHeader')).toBeInTheDocument();
  expect(screen.getByText('services.requirements')).toBeInTheDocument();
  expect(screen.getByText('services.moreInfo')).toBeInTheDocument();
});
