import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchStandard from './AcademySearch';

test('renders search input and handles typing', async () => {
  const user = userEvent.setup();
  render(<SearchStandard />);
  
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
  
  await user.type(searchInput, 'test');
  expect(searchInput).toHaveValue('test');
});
