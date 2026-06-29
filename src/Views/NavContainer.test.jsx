import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavContainer from './NavContainer';

const rightItems = [
  { content: 'nav.academy', key: 'academy', to: '/ancester-academy' },
  { content: 'nav.marketplace', key: 'marketplace', to: '/marketplace' },
  { content: 'nav.services', key: 'servicios', to: '/services' },
  { content: 'nav.knowUs', key: 'conócenos', to: '/know-us' },
];

describe('desktop layout', () => {
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

  test('renders nav with sign in link', () => {
    render(
      <BrowserRouter>
        <NavContainer rightItems={rightItems} />
      </BrowserRouter>
    );
    const signInLinks = screen.getAllByText('nav.signIn');
    expect(signInLinks.length).toBeGreaterThanOrEqual(1);
  });

  test('renders language switcher', () => {
    const changeLanguage = jest.fn();
    render(
      <BrowserRouter>
        <NavContainer rightItems={rightItems} changeLanguage={changeLanguage} currentLanguage="en" />
      </BrowserRouter>
    );
    // Language dropdown renders in desktop nav; may appear multiple times
    const langTexts = screen.getAllByText('language.en');
    expect(langTexts.length).toBeGreaterThanOrEqual(1);
  });

  test('language switcher calls changeLanguage when option selected', () => {
    const changeLanguage = jest.fn();
    render(
      <BrowserRouter>
        <NavContainer rightItems={rightItems} changeLanguage={changeLanguage} currentLanguage="en" />
      </BrowserRouter>
    );
    // Click the language dropdown to open it - pick the first matching element
    const langTexts = screen.getAllByText('language.en');
    fireEvent.click(langTexts[0]);
    // Click the Spanish option
    fireEvent.click(screen.getByText('language.es'));
    expect(changeLanguage).toHaveBeenCalledWith('es');
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
    const gamesText = screen.getAllByText('nav.games');
    expect(gamesText.length).toBeGreaterThanOrEqual(1);
  });
});

describe('mobile layout', () => {
  beforeEach(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query.includes('max-width'),
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  test('renders sign in link on mobile', () => {
    render(
      <BrowserRouter>
        <NavContainer rightItems={rightItems} />
      </BrowserRouter>
    );
    const signInLinks = screen.getAllByText('nav.signIn');
    expect(signInLinks.length).toBeGreaterThanOrEqual(1);
  });
});
