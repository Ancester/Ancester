import React from 'react';
import { render } from '@testing-library/react';
import KnowIsrael from './KnowIsrael';

test('renders israel profile page without crashing', () => {
  render(<KnowIsrael />);
});
