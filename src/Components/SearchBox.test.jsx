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
  jest.useFakeTimers();
  try {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<SearchCategory source={{}} />);
    const searchInput = screen.getByRole('textbox');
    await user.type(searchInput, 'test query');
    jest.advanceTimersByTime(600);
    expect(searchInput).toHaveValue('test query');
  } finally {
    jest.useRealTimers();
  }
});

test('clears search when value becomes empty after debounce', async () => {
  jest.useFakeTimers();
  try {
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<SearchCategory source={{}} />);
    const searchInput = screen.getByRole('textbox');
    
    await user.type(searchInput, 'a');
    jest.advanceTimersByTime(600);
    
    await user.clear(searchInput);
    jest.advanceTimersByTime(600);
    
    expect(searchInput).toHaveValue('');
  } finally {
    jest.useRealTimers();
  }
});


