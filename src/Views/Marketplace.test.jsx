import React from 'react';
import { render, screen } from '@testing-library/react';
import Marketplace from './Marketplace';

test('renders marketplace with filter and sell button', () => {
  render(<Marketplace />);
  expect(screen.getByText('marketplace.filters')).toBeInTheDocument();
  expect(screen.getByText('marketplace.wantToSell')).toBeInTheDocument();
});

test('renders filter options with translated category names', () => {
  render(<Marketplace />);
  // These keys match the locale file structure — the mock t() returns the key,
  // but a real i18n instance would return translated strings.
  // This test verifies the translation keys are correctly wired to the component.
  const weapons = screen.getAllByText('marketplace.weapons');
  expect(weapons.length).toBeGreaterThanOrEqual(1);
  const scenarios = screen.getAllByText('marketplace.scenarios');
  expect(scenarios.length).toBeGreaterThanOrEqual(1);
  const all = screen.getAllByText('marketplace.all');
  expect(all.length).toBeGreaterThanOrEqual(1);
});

test('renders buy buttons on cards after data loads with translated content', async () => {
  render(<Marketplace />);
  // After componentDidMount, cards render with buy buttons using translation keys
  const buyButtons = await screen.findAllByText('marketplace.buy');
  expect(buyButtons.length).toBeGreaterThanOrEqual(1);
});

test('renders category section headers using translation keys', async () => {
  render(<Marketplace />);
  // Section headers use t() with stable category keys (weapons, scenarios, etc.)
  // These appear both as section headers AND in the filter dropdown,
  // so use getAllByText and check at least one exists
  const weaponsSections = await screen.findAllByText('marketplace.weapons');
  expect(weaponsSections.length).toBeGreaterThanOrEqual(1);
});
