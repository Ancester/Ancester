import React from 'react';
import { render } from '@testing-library/react';
import KnowDaniel from './KnowDaniel';

test('renders daniel profile page without crashing', () => {
  render(<KnowDaniel />);
});
