import '@testing-library/jest-dom';

// Mock window.matchMedia for responsive components and Semantic UI
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock scrollTo
window.scrollTo = jest.fn();

// Mock react-i18next so components wrapped with withTranslation() work in tests
// NOTE: jest.mock factory is hoisted, so we must use require() internally
jest.mock('react-i18next', () => {
  // eslint-disable-next-line no-restricted-globals
  const React = require('react');
  return {
    withTranslation: () => (Component) => {
      const Wrapped = (props) =>
        React.createElement(Component, {
          ...props,
          t: (key, options) => options?.defaultValue || key,
          i18n: { language: 'en', changeLanguage: jest.fn() },
        });
      Wrapped.displayName = `withTranslation(${Component.displayName || Component.name || 'Component'})`;
      return Wrapped;
    },
    useTranslation: () => ({
      t: (key, options) => options?.defaultValue || key,
      i18n: { language: 'en', changeLanguage: jest.fn() },
    }),
    initReactI18next: { type: '3rdParty', init: jest.fn() },
  };
});
