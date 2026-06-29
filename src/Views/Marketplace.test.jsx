import React from 'react';
import { render, screen } from '@testing-library/react';
import Marketplace from './Marketplace';

test('renders marketplace with filter and sell button', () => {
  render(<Marketplace />);
  expect(screen.getByText('marketplace.filters')).toBeInTheDocument();
  expect(screen.getByText('marketplace.wantToSell')).toBeInTheDocument();
});

test('renders filter options in dropdown', () => {
  render(<Marketplace />);
  const weapons = screen.getAllByText('marketplace.weapons');
  expect(weapons.length).toBeGreaterThanOrEqual(1);
});

test('renders buy buttons on cards after data loads', async () => {
  render(<Marketplace />);
  // After componentDidMount, cards should render with buy buttons
  const buyButtons = await screen.findAllByText('marketplace.buy');
  expect(buyButtons.length).toBeGreaterThanOrEqual(1);
});
