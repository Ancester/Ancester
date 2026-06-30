/**
 * @jest-environment jsdom
 */

describe('registerServiceWorker', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
    jest.restoreAllMocks();
  });

  test('default export register is a function', () => {
    const registerDefault = require('./registerServiceWorker').default;
    expect(typeof registerDefault).toBe('function');
  });

  test('register does not throw when called in test env', () => {
    process.env.NODE_ENV = 'test';
    const registerDefault = require('./registerServiceWorker').default;
    expect(() => registerDefault()).not.toThrow();
  });

  test('unregister returns undefined when serviceWorker is not available', () => {
    const { unregister } = require('./registerServiceWorker');
    expect(unregister()).toBeUndefined();
  });

  test('register is safe to call multiple times', () => {
    process.env.NODE_ENV = 'test';
    const registerDefault = require('./registerServiceWorker').default;
    expect(() => { registerDefault(); registerDefault(); }).not.toThrow();
  });
});