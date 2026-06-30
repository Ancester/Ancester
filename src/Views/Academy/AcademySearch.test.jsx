jest.mock('faker', () => ({
  company: {
    companyName: () => 'ACME Corp',
    catchPhrase: () => 'Great product',
  },
  internet: {
    avatar: () => 'http://example.com/avatar.png',
  },
  finance: {
    amount: () => '$50.00',
  },
}));

import React from 'react';
import { render, screen, act } from '@testing-library/react';
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

test('filters results after debounce when typing a query', async () => {
  jest.useFakeTimers();
  try {
    jest.spyOn(SearchStandard.prototype, 'setState');
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<SearchStandard />);
    const searchInput = screen.getByRole('textbox');
    
    await user.type(searchInput, 'acme');
    jest.advanceTimersByTime(1200);
    
    const callsWithResults = SearchStandard.prototype.setState.mock.calls.filter(
      args => args[0] && Array.isArray(args[0].results)
    );
    expect(callsWithResults.length).toBeGreaterThanOrEqual(1);
  } finally {
    jest.useRealTimers();
    SearchStandard.prototype.setState.mockRestore();
  }
});

test('shows no results for nonsense query after debounce', async () => {
  jest.useFakeTimers();
  try {
    jest.spyOn(SearchStandard.prototype, 'setState');
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<SearchStandard />);
    const searchInput = screen.getByRole('textbox');
    
    await user.type(searchInput, 'zzzxyzzz');
    jest.advanceTimersByTime(1200);
    
    const callsWithResults = SearchStandard.prototype.setState.mock.calls.filter(
      args => args[0] && Array.isArray(args[0].results)
    );
    const lastResultsCall = callsWithResults[callsWithResults.length - 1];
    expect(lastResultsCall[0].results.length).toBe(0);
  } finally {
    jest.useRealTimers();
    SearchStandard.prototype.setState.mockRestore();
  }
});

test('updates value when a result is selected', async () => {
  jest.useFakeTimers();
  try {
    jest.spyOn(SearchStandard.prototype, 'setState');
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<SearchStandard />);
    const searchInput = screen.getByRole('textbox');
    
    await user.type(searchInput, 'acme');
    jest.advanceTimersByTime(1200);
    
    const lastCall = SearchStandard.prototype.setState.mock.calls.pop();
    expect(lastCall[0].results.length).toBeGreaterThan(0);
    await act(async () => {
      const comp = SearchStandard.prototype.setState.mock.instances[0];
      comp.handleResultSelect(null, { result: lastCall[0].results[0] });
    });
    expect(searchInput).toHaveValue('ACME Corp');
  } finally {
    jest.useRealTimers();
    SearchStandard.prototype.setState.mockRestore();
  }
});

test('resets component when input is cleared', async () => {
  jest.useFakeTimers();
  try {
    jest.spyOn(SearchStandard.prototype, 'setState');
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<SearchStandard />);
    const searchInput = screen.getByRole('textbox');
    
    await user.type(searchInput, 'acme');
    jest.advanceTimersByTime(1200);
    
    await user.clear(searchInput);
    jest.advanceTimersByTime(1200);
    
    const resetCalls = SearchStandard.prototype.setState.mock.calls.filter(
      args => args[0] && args[0].isLoading === false && args[0].results.length === 0 && args[0].value === ''
    );
    expect(resetCalls.length).toBeGreaterThanOrEqual(1);
  } finally {
    jest.useRealTimers();
    SearchStandard.prototype.setState.mockRestore();
  }
});

test('shows loading state while debounce is pending', async () => {
  jest.useFakeTimers();
  try {
    jest.spyOn(SearchStandard.prototype, 'setState');
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    render(<SearchStandard />);
    const searchInput = screen.getByRole('textbox');
    
    await user.type(searchInput, 'acme');
    
    const loadingCalls = SearchStandard.prototype.setState.mock.calls.filter(
      args => args[0] && args[0].isLoading === true
    );
    expect(loadingCalls.length).toBeGreaterThanOrEqual(1);
  } finally {
    jest.useRealTimers();
    SearchStandard.prototype.setState.mockRestore();
  }
});
