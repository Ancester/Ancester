/**
 * @jest-environment jsdom
 */

describe('serviceWorker', () => {
  const originalEnv = process.env.NODE_ENV;

  afterEach(() => {
    process.env.NODE_ENV = originalEnv;
    jest.restoreAllMocks();
    delete global.fetch;
  });

  test('register does not throw when called in test env', () => {
    process.env.NODE_ENV = 'test';
    const { register } = require('./serviceWorker');
    expect(() => register()).not.toThrow();
  });

  test('unregister returns undefined when serviceWorker is not available', () => {
    const { unregister } = require('./serviceWorker');
    expect(unregister()).toBeUndefined();
  });

  test('register with config object does not throw', () => {
    process.env.NODE_ENV = 'test';
    const { register } = require('./serviceWorker');
    expect(() => register({})).not.toThrow();
    expect(() => register({ onUpdate: jest.fn(), onSuccess: jest.fn() })).not.toThrow();
  });

  test('register is safe to call multiple times', () => {
    process.env.NODE_ENV = 'test';
    const { register } = require('./serviceWorker');
    expect(() => { register(); register(); }).not.toThrow();
  });
});