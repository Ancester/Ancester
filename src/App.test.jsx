import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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

test('renders contact page at /contacto route', () => {
  render(
    <MemoryRouter initialEntries={['/contacto']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('contacto.title')).toBeInTheDocument();
  expect(screen.getByText('contacto.submitButton')).toBeInTheDocument();
});

test('renders marketplace page at /marketplace route', () => {
  render(
    <MemoryRouter initialEntries={['/marketplace']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('marketplace.filters')).toBeInTheDocument();
});

test('renders know-us page at /know-us route', () => {
  render(
    <MemoryRouter initialEntries={['/know-us']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('knowUs.team')).toBeInTheDocument();
});

test('renders academy page at /ancester-academy route', () => {
  render(
    <MemoryRouter initialEntries={['/ancester-academy']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('nav.games')).toBeInTheDocument();
});

test('renders we-create page at /we-create route', () => {
  render(
    <MemoryRouter initialEntries={['/we-create']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('services.weCreateHeader')).toBeInTheDocument();
});

test('renders advise page at /advise route', () => {
  render(
    <MemoryRouter initialEntries={['/advise']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('services.adviseHeader')).toBeInTheDocument();
});

test('renders sponsor page at /sponsor route', () => {
  render(
    <MemoryRouter initialEntries={['/sponsor']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('services.sponsorHeader')).toBeInTheDocument();
});

test('changeLanguage function is wired to NavContainer', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  const langTexts = screen.getAllByText('language.en');
  fireEvent.click(langTexts[0]);
  const esOption = screen.getByText('language.es');
  fireEvent.click(esOption);
  expect(screen.getAllByText('language.es').length).toBeGreaterThanOrEqual(1);
});
