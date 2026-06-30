import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contacto from './Contacto';

test('renders contact form with all fields', () => {
  render(<Contacto />);
  expect(screen.getByText('contacto.title')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('contacto.namePlaceholder')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('contacto.emailPlaceholder')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('contacto.messagePlaceholder')).toBeInTheDocument();
  expect(screen.getByText('contacto.submitButton')).toBeInTheDocument();
});

test('submit button is disabled when fields are empty', () => {
  render(<Contacto />);
  const submitBtn = screen.getByText('contacto.submitButton').closest('button');
  expect(submitBtn).toBeDisabled();
});

test('submit button remains disabled with partial input', async () => {
  const user = userEvent.setup();
  render(<Contacto />);
  const submitBtn = screen.getByText('contacto.submitButton').closest('button');
  
  await user.type(screen.getByPlaceholderText('contacto.namePlaceholder'), 'Test Name');
  expect(submitBtn).toBeDisabled();
  
  await user.type(screen.getByPlaceholderText('contacto.emailPlaceholder'), 'test@example.com');
  expect(submitBtn).toBeDisabled();
});

test('submit button is enabled when all fields are filled', async () => {
  const user = userEvent.setup();
  render(<Contacto />);
  const submitBtn = screen.getByText('contacto.submitButton').closest('button');
  
  await user.type(screen.getByPlaceholderText('contacto.namePlaceholder'), 'Test Name');
  await user.type(screen.getByPlaceholderText('contacto.emailPlaceholder'), 'test@example.com');
  
  const dropdown = document.querySelector('.ui.selection.dropdown');
  expect(dropdown).toBeInTheDocument();
  fireEvent.click(dropdown);
  const menuItem = dropdown.querySelector('.item');
  expect(menuItem).toBeInTheDocument();
  fireEvent.click(menuItem);
  
  await user.type(screen.getByPlaceholderText('contacto.messagePlaceholder'), 'Test message');
  
  expect(submitBtn).not.toBeDisabled();
});

test('inputs update on user typing', async () => {
  const user = userEvent.setup();
  render(<Contacto />);

  await user.type(screen.getByPlaceholderText('contacto.namePlaceholder'), 'Test User');
  expect(screen.getByPlaceholderText('contacto.namePlaceholder')).toHaveValue('Test User');

  await user.type(screen.getByPlaceholderText('contacto.emailPlaceholder'), 'test@example.com');
  expect(screen.getByPlaceholderText('contacto.emailPlaceholder')).toHaveValue('test@example.com');
});

test('submitting with empty fields does not show success message', () => {
  render(<Contacto />);
  const form = document.querySelector('form');
  fireEvent.submit(form);
  expect(screen.queryByText('contacto.successTitle')).not.toBeInTheDocument();
  expect(screen.getByText('contacto.title')).toBeInTheDocument();
});

test('form submission shows success message when all fields filled', () => {
  render(<Contacto />);
  
  // Fill all text fields
  fireEvent.change(screen.getByPlaceholderText('contacto.namePlaceholder'), { target: { value: 'Test Name' } });
  fireEvent.change(screen.getByPlaceholderText('contacto.emailPlaceholder'), { target: { value: 'test@test.com' } });
  fireEvent.change(screen.getByPlaceholderText('contacto.messagePlaceholder'), { target: { value: 'Test message content' } });
  
  // Select a game - interact with the Semantic UI dropdown by clicking the
  // dropdown container then selecting the first menu item
  const dropdown = document.querySelector('.ui.selection.dropdown');
  if (dropdown) {
    fireEvent.click(dropdown);
    // Find the first menu item (Gunz) inside the dropdown
    const menuItem = dropdown.querySelector('.item');
    if (menuItem) {
      fireEvent.click(menuItem);
    }
  }
  
  // Submit the form directly
  const form = document.querySelector('form');
  if (form) {
    fireEvent.submit(form);
  }
  
  // Verify submitted state is shown with the entered data
  expect(screen.getByText('contacto.successTitle')).toBeInTheDocument();
  expect(screen.getByText('Test Name')).toBeInTheDocument();
  expect(screen.getByText('test@test.com')).toBeInTheDocument();
  expect(screen.getByText('Test message content')).toBeInTheDocument();
});
