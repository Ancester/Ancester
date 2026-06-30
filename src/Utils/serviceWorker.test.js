/**
 * @jest-environment jsdom
 */
import { register, unregister } from './serviceWorker';

// In jsdom, navigator exists but navigator.serviceWorker is undefined,
// so 'serviceWorker' in navigator returns false, functions return early.

beforeEach(() => {
  // Ensure we're in test environment
  process.env.NODE_ENV = 'test';
});

test('register does not throw when called', () => {
  expect(() => register()).not.toThrow();
});

test('unregister returns undefined when serviceWorker is not available', () => {
  expect(unregister()).toBeUndefined();
});

test('register with config object does not throw', () => {
  expect(() => register({})).not.toThrow();
  expect(() => register({ onUpdate: jest.fn(), onSuccess: jest.fn() })).not.toThrow();
});
