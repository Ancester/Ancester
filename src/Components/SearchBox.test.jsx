import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
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

test('filters results by multi-category source', async () => {
  jest.useFakeTimers();
  try {
    const setStateSpy = jest.spyOn(SearchCategory.prototype, 'setState');
    const source = {
      categoryA: {
        name: 'Category A',
        results: [
          { title: 'Apple', description: 'Fruit' },
          { title: 'Apricot', description: 'Fruit' },
        ],
      },
      categoryB: {
        name: 'Category B',
        results: [
          { title: 'Banana', description: 'Fruit' },
          { title: 'Blueberry', description: 'Fruit' },
        ],
      },
    };
    render(<SearchCategory source={source} />);
    const searchInput = screen.getByRole('textbox');
    
    await userEvent.setup({ advanceTimers: jest.advanceTimersByTime }).type(searchInput, 'ap');
    jest.advanceTimersByTime(600);
    
    const callsWithResults = setStateSpy.mock.calls.filter(args => args[0] && args[0].results);
    const lastResultsCall = callsWithResults[callsWithResults.length - 1];
    expect(lastResultsCall[0].results).toEqual(
      expect.objectContaining({
        categoryA: expect.objectContaining({
          results: expect.arrayContaining([
            expect.objectContaining({ title: 'Apple' }),
            expect.objectContaining({ title: 'Apricot' }),
          ]),
        }),
      })
    );
  } finally {
    jest.useRealTimers();
    SearchCategory.prototype.setState.mockRestore();
  }
});

test('renders no categories when query matches nothing', async () => {
  jest.useFakeTimers();
  try {
    const setStateSpy = jest.spyOn(SearchCategory.prototype, 'setState');
    const source = {
      categoryA: {
        name: 'Category A',
        results: [
          { title: 'Apple', description: 'Fruit' },
        ],
      },
    };
    render(<SearchCategory source={source} />);
    const searchInput = screen.getByRole('textbox');
    
    await userEvent.setup({ advanceTimers: jest.advanceTimersByTime }).type(searchInput, 'zzzxyzzz');
    jest.advanceTimersByTime(600);
    
    const callsWithResults = setStateSpy.mock.calls.filter(args => args[0] && args[0].results);
    const lastResultsCall = callsWithResults[callsWithResults.length - 1];
    expect(lastResultsCall[0].results).toEqual({});
  } finally {
    jest.useRealTimers();
    SearchCategory.prototype.setState.mockRestore();
  }
});

test('updates value when a result is clicked', async () => {
  jest.useFakeTimers();
  try {
    const setStateSpy = jest.spyOn(SearchCategory.prototype, 'setState');
    const source = {
      categoryA: {
        name: 'Category A',
        results: [
          { title: 'Apple', description: 'Fruit' },
        ],
      },
    };
    render(<SearchCategory source={source} />);
    const searchInput = screen.getByRole('textbox');
    
    await userEvent.setup({ advanceTimers: jest.advanceTimersByTime }).type(searchInput, 'ap');
    jest.advanceTimersByTime(600);
    
    const lastResultsCall = setStateSpy.mock.calls.filter(args => args[0] && args[0].results).pop();
    const result = lastResultsCall && lastResultsCall[0].results.categoryA && lastResultsCall[0].results.categoryA.results[0];
    expect(result).toEqual(expect.objectContaining({ title: 'Apple' }));
    await act(async () => {
      const comp = setStateSpy.mock.instances[0];
      comp.handleResultSelect(null, { result });
    });
    expect(searchInput).toHaveValue('Apple');
  } finally {
    jest.useRealTimers();
    SearchCategory.prototype.setState.mockRestore();
  }
});

test('does not search until debounce leading edge fires', async () => {
  jest.useFakeTimers();
  try {
    const setStateSpy = jest.spyOn(SearchCategory.prototype, 'setState');
    const source = {
      categoryA: {
        name: 'Category A',
        results: [
          { title: 'Apple', description: 'Fruit' },
        ],
      },
    };
    render(<SearchCategory source={source} />);
    const searchInput = screen.getByRole('textbox');
    
    const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
    await user.type(searchInput, 'ap');
    
    const loadingCalls = setStateSpy.mock.calls.filter(args => args[0] && args[0].isLoading === true);
    expect(loadingCalls.length).toBeGreaterThanOrEqual(1);
  } finally {
    jest.useRealTimers();
    SearchCategory.prototype.setState.mockRestore();
  }
});

