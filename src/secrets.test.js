import { accessId, APIkey } from './secrets';

test('accessId and APIkey are strings sourced from environment', () => {
  expect(typeof accessId).toBe('string');
  expect(typeof APIkey).toBe('string');
});

test('secrets propagate values from process.env', () => {
  const originalAccessId = process.env.ACCESS_ID;
  const originalApiKey = process.env.API_KEY;

  process.env.ACCESS_ID = 'test-access-id';
  process.env.API_KEY = 'test-api-key';

  jest.resetModules();
  // eslint-disable-next-line global-require
  const secrets = require('./secrets');

  expect(secrets.accessId).toBe('test-access-id');
  expect(secrets.APIkey).toBe('test-api-key');

  if (originalAccessId === undefined) {
    delete process.env.ACCESS_ID;
  } else {
    process.env.ACCESS_ID = originalAccessId;
  }

  if (originalApiKey === undefined) {
    delete process.env.API_KEY;
  } else {
    process.env.API_KEY = originalApiKey;
  }
});
