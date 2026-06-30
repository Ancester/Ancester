/**
 * @jest-environment jsdom
 */
// Mock the DOM element that index.js expects
beforeAll(() => {
  // Ensure root element exists for ReactDOM.createRoot
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);
});

test('index.js can be imported without throwing', () => {
  // We just verify it can be imported in a jsdom environment
  expect(() => {
    // Dynamic import to avoid module-level side effects with other tests
    // The actual import is verified by the test runner resolving the module
    require('./index');
  }).not.toThrow();
});
