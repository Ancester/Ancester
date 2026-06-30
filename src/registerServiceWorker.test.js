/**
 * @jest-environment jsdom
 */
import registerDefault, { unregister } from './registerServiceWorker';

test('default export register is a function', () => {
  expect(typeof registerDefault).toBe('function');
});

test('register does not throw when called', () => {
  // In test environment NODE_ENV is 'test', so the production check
  // fails and the function returns early
  expect(() => registerDefault()).not.toThrow();
});

test('unregister returns undefined when serviceWorker is not available', () => {
  expect(unregister()).toBeUndefined();
});
