import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavContainer from './NavContainer';

// Set up matchMedia for the responsive NavContainer
beforeEach(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query.includes('min-width'),
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

const rightItems = [
  { content: 'nav.academy', key: 'academy', to: '/ancester-academy' },
  { content: 'nav.marketplace', key: 'marketplace', to: '/marketplace' },
  { content: 'nav.services', key: 'servicios', to: '/services' },
  { content: 'nav.knowUs', key: 'conócenos', to: '/know-us' },
];

test('renders nav with sign in link', () => {
  render(
    <BrowserRouter>
      <NavContainer rightItems={rightItems} />
    </BrowserRouter>
  );
  // Sign in link should always render
  const signInLinks = screen.getAllByText('nav.signIn');
  expect(signInLinks.length).toBeGreaterThanOrEqual(1);
});

test('renders language switcher', () => {
  render(
    <BrowserRouter>
      <NavContainer rightItems={rightItems} changeLanguage={jest.fn()} currentLanguage="en" />
    </BrowserRouter>
  );
  // Language switcher appears in both mobile sidebar and desktop nav
  const langTexts = screen.getAllByText('language.en');
  expect(langTexts.length).toBeGreaterThanOrEqual(1);
});

test('renders children content', () => {
  render(
    <BrowserRouter>
      <NavContainer rightItems={rightItems}>
        <div data-testid="child-content">Child Content</div>
      </NavContainer>
    </BrowserRouter>
  );
  expect(screen.getByTestId('child-content')).toBeInTheDocument();
});

test('renders games dropdown on desktop', () => {
  render(
    <BrowserRouter>
      <NavContainer rightItems={rightItems} />
    </BrowserRouter>
  );
  // nav.games appears in desktop dropdown and mobile sidebar
  const gamesText = screen.getAllByText('nav.games');
  expect(gamesText.length).toBeGreaterThanOrEqual(1);
});
