import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with privacy, feedback, social, and contact sections', () => {
  render(<Footer />);
  expect(screen.getByText('footer.privacy')).toBeInTheDocument();
  expect(screen.getByText('footer.feedback')).toBeInTheDocument();
  expect(screen.getByText('footer.social')).toBeInTheDocument();
  expect(screen.getByText('footer.contact')).toBeInTheDocument();
  expect(screen.getByText('footer.rights')).toBeInTheDocument();
});
