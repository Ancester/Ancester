import { accessId, APIkey } from './secrets';

test('accessId and APIkey are strings sourced from environment', () => {
  expect(typeof accessId).toBe('string');
  expect(typeof APIkey).toBe('string');
});

test('secrets propagate values from process.env', () => {
  const originalAccessId = process.env.REACT_APP_ACCESS_ID;
  const originalApiKey = process.env.REACT_APP_API_KEY;

  try {
    process.env.REACT_APP_ACCESS_ID = 'test-access-id';
    process.env.REACT_APP_API_KEY = 'test-api-key';

    jest.resetModules();
    // eslint-disable-next-line global-require
    const secrets = require('./secrets');

    expect(secrets.accessId).toBe('test-access-id');
    expect(secrets.APIkey).toBe('test-api-key');
  } finally {
    if (originalAccessId === undefined) {
      delete process.env.REACT_APP_ACCESS_ID;
    } else {
      process.env.REACT_APP_ACCESS_ID = originalAccessId;
    }

    if (originalApiKey === undefined) {
      delete process.env.REACT_APP_API_KEY;
    } else {
      process.env.REACT_APP_API_KEY = originalApiKey;
    }
  }
});
