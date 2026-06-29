import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchCategory from './SearchBox';

test('renders search input without crashing', () => {
  render(<SearchCategory source={{}} />);
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
});

test('handles search input changes', async () => {
  const user = userEvent.setup();
  render(<SearchCategory source={{}} />);
  const searchInput = screen.getByRole('textbox');
  await user.type(searchInput, 'test query');
  expect(searchInput).toHaveValue('test query');
});

test('clears search when value becomes empty after debounce', async () => {
  jest.useFakeTimers();
  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  render(<SearchCategory source={{}} />);
  const searchInput = screen.getByRole('textbox');
  
  await user.type(searchInput, 'a');
  // Advance past the debounce
  jest.advanceTimersByTime(600);
  
  await user.clear(searchInput);
  // Advance past the debounce
  jest.advanceTimersByTime(600);
  
  // Should handle empty input gracefully (resetComponent called)
  expect(searchInput).toHaveValue('');
  
  jest.useRealTimers();
});

test('renders without source prop', () => {
  // @ts-expect-error testing missing source prop
  render(<SearchCategory />);
  const searchInput = screen.getByRole('textbox');
  expect(searchInput).toBeInTheDocument();
});
