import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contacto from './Contacto';

test('renders contact form with all fields', () => {
  render(<Contacto />);
  expect(screen.getByText('Contacto')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Tu nombre')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('tu@correo.com')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Cuentanos tu proyecto o consulta')).toBeInTheDocument();
  expect(screen.getByText('Enviar mensaje')).toBeInTheDocument();
});

test('submit button is disabled when fields are empty', () => {
  render(<Contacto />);
  const submitBtn = screen.getByText('Enviar mensaje').closest('button');
  expect(submitBtn).toBeDisabled();
});

test('inputs update on user typing', async () => {
  const user = userEvent.setup();
  render(<Contacto />);

  await user.type(screen.getByPlaceholderText('Tu nombre'), 'Test User');
  expect(screen.getByPlaceholderText('Tu nombre')).toHaveValue('Test User');

  await user.type(screen.getByPlaceholderText('tu@correo.com'), 'test@example.com');
  expect(screen.getByPlaceholderText('tu@correo.com')).toHaveValue('test@example.com');
});

test('form submission shows success message when all fields filled', () => {
  render(<Contacto />);
  
  // Fill all text fields
  fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { target: { value: 'Test Name' } });
  fireEvent.change(screen.getByPlaceholderText('tu@correo.com'), { target: { value: 'test@test.com' } });
  fireEvent.change(screen.getByPlaceholderText('Cuentanos tu proyecto o consulta'), { target: { value: 'Test message content' } });
  
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
  expect(screen.getByText('Te contactaremos tras revisar tu mensaje')).toBeInTheDocument();
  expect(screen.getByText('Test Name')).toBeInTheDocument();
  expect(screen.getByText('test@test.com')).toBeInTheDocument();
  expect(screen.getByText('Test message content')).toBeInTheDocument();
});
