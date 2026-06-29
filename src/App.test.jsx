import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

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

test('renders app with navigation and footer', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const signInLinks = screen.getAllByText('nav.signIn');
  expect(signInLinks.length).toBeGreaterThanOrEqual(1);
  expect(screen.getByText('footer.privacy')).toBeInTheDocument();
});

test('renders home page content at root route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('home.indieSoloDev')).toBeInTheDocument();
  expect(screen.getByText('home.heroTitle')).toBeInTheDocument();
  expect(screen.getByText('home.heroDescription')).toBeInTheDocument();
});

test('renders 404 page for unknown routes', () => {
  render(
    <MemoryRouter initialEntries={['/unknown-route']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('notFound.message')).toBeInTheDocument();
});

test('renders login page at /login route', () => {
  render(
    <MemoryRouter initialEntries={['/login']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('login.title')).toBeInTheDocument();
  expect(screen.getByText('login.demoWarning')).toBeInTheDocument();
});

test('renders services page at /services route', () => {
  render(
    <MemoryRouter initialEntries={['/services']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('services.title')).toBeInTheDocument();
});
