import React from 'react';
import { render, screen } from '@testing-library/react';
import AncesterAcademyHome from './AncesterAcademyHome';

test('renders academy home with category labels', () => {
  render(<AncesterAcademyHome />);
  expect(screen.getByText('academy.design3d')).toBeInTheDocument();
  expect(screen.getByText('academy.business')).toBeInTheDocument();
  expect(screen.getByText('academy.gameDev')).toBeInTheDocument();
});
