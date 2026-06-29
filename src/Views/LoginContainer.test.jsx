import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginContainer from './LoginContainer';

test('renders login form with demo warning', () => {
  render(<LoginContainer />);
  expect(screen.getByText('login.title')).toBeInTheDocument();
  expect(screen.getByText('login.demoWarning')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('login.idPlaceholder')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('login.passwordPlaceholder')).toBeInTheDocument();
});

test('shows login demo modal when clicking INGRESAR', async () => {
  render(<LoginContainer />);
  fireEvent.click(screen.getByText('login.loginButton'));
  // Modal content may render asynchronously via portal
  expect(await screen.findByText('login.demoModalTitle')).toBeInTheDocument();
  expect(screen.getByText('login.demoModalLoginHeader')).toBeInTheDocument();
});

test('shows signup demo modal when clicking Inscríbete', async () => {
  render(<LoginContainer />);
  fireEvent.click(screen.getByText('login.signUp'));
  expect(await screen.findByText('login.demoModalTitle')).toBeInTheDocument();
  expect(screen.getByText('login.demoModalSignupHeader')).toBeInTheDocument();
});

test('closes modal when clicking Entendido', async () => {
  render(<LoginContainer />);
  fireEvent.click(screen.getByText('login.loginButton'));
  expect(await screen.findByText('login.demoModalTitle')).toBeInTheDocument();

  fireEvent.click(screen.getByText('login.understood'));
  expect(screen.queryByText('login.demoModalTitle')).not.toBeInTheDocument();
});

test('renders signup link text', () => {
  render(<LoginContainer />);
  expect(screen.getByText('login.newHere')).toBeInTheDocument();
});

test('form inputs are readOnly', () => {
  render(<LoginContainer />);
  const idInput = screen.getByPlaceholderText('login.idPlaceholder');
  const passwordInput = screen.getByPlaceholderText('login.passwordPlaceholder');
  expect(idInput).toHaveAttribute('readOnly');
  expect(passwordInput).toHaveAttribute('readOnly');
});
