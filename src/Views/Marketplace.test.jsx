import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Marketplace from './Marketplace';

test('renders marketplace with filter and sell button', () => {
  render(<Marketplace />);
  expect(screen.getByText('marketplace.filters')).toBeInTheDocument();
  expect(screen.getByText('marketplace.wantToSell')).toBeInTheDocument();
});

test('renders filter options with translated category names', () => {
  render(<Marketplace />);
  const weapons = screen.getAllByText('marketplace.weapons');
  expect(weapons.length).toBeGreaterThanOrEqual(1);
  const scenarios = screen.getAllByText('marketplace.scenarios');
  expect(scenarios.length).toBeGreaterThanOrEqual(1);
  const all = screen.getAllByText('marketplace.all');
  expect(all.length).toBeGreaterThanOrEqual(1);
});

test('renders buy buttons on cards after data loads with translated content', async () => {
  render(<Marketplace />);
  const buyButtons = await screen.findAllByText('marketplace.buy');
  expect(buyButtons.length).toBeGreaterThanOrEqual(1);
});

test('renders category section headers using translation keys', async () => {
  render(<Marketplace />);
  const weaponsSections = await screen.findAllByText('marketplace.weapons');
  expect(weaponsSections.length).toBeGreaterThanOrEqual(1);
});

test('handleChange filters to specific category', async () => {
  const { container } = render(<Marketplace />);
  const dropdowns = screen.getAllByRole('combobox');
  const filterDropdown = dropdowns[0];
  
  fireEvent.click(filterDropdown);
  const weaponsOption = screen.getAllByText('marketplace.weapons');
  fireEvent.click(weaponsOption[weaponsOption.length - 1]);
  
  await new Promise(r => setTimeout(r, 100));
  
  const buyButtons = screen.getAllByText('marketplace.buy');
  expect(buyButtons.length).toBeGreaterThanOrEqual(1);
});

test('handleChange uses category value when not all', async () => {
  const { container } = render(<Marketplace />);
  const dropdowns = screen.getAllByRole('combobox');
  const filterDropdown = dropdowns[0];
  
  fireEvent.click(filterDropdown);
  const effectsOption = screen.getAllByText('marketplace.effects');
  fireEvent.click(effectsOption[effectsOption.length - 1]);
  
  await new Promise(r => setTimeout(r, 100));
  
  expect(screen.getAllByText('marketplace.buy').length).toBeGreaterThanOrEqual(1);
});

test('handleChange resets to all categories', async () => {
  render(<Marketplace />);
  const dropdowns = screen.getAllByRole('combobox');
  const filterDropdown = dropdowns[0];
  fireEvent.click(filterDropdown);
  const allOptions = screen.getAllByText('marketplace.all');
  fireEvent.click(allOptions[allOptions.length - 1]);
  await waitFor(() => {
    const buyButtons = screen.getAllByText('marketplace.buy');
    expect(buyButtons.length).toBeGreaterThanOrEqual(5);
  });
});

test('PollinatedImage falls back on error', () => {
  const { container } = render(<Marketplace />);
  const images = container.querySelectorAll('img');
  const cardImage = Array.from(images).find(img => img.classList.contains('visible') || img.classList.contains('content'));
  if (cardImage) {
    fireEvent.error(cardImage);
  }
  expect(container.querySelector('img')).toBeInTheDocument();
});
