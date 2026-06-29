import { accessId, APIkey } from './secrets';

test('exports accessId and APIkey as strings', () => {
  expect(typeof accessId).toBe('string');
  expect(typeof APIkey).toBe('string');
  expect(accessId.length).toBeGreaterThan(0);
  expect(APIkey.length).toBeGreaterThan(0);
});
