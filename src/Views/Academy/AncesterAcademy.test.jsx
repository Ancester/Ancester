import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AncesterAcademy from './AncesterAcademy';

test('renders academy page without crashing', () => {
  render(
    <BrowserRouter>
      <AncesterAcademy />
    </BrowserRouter>
  );
});
