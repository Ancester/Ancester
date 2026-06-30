import i18n from './i18n';

const flattenKeys = (obj, prefix = '') => {
  const keys = new Set();
  for (const key of Object.keys(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      flattenKeys(obj[key], fullKey).forEach(k => keys.add(k));
    } else {
      keys.add(fullKey);
    }
  }
  return keys;
};

test('i18n is initialized with Spanish as default language', () => {
  expect(i18n.isInitialized).toBe(true);
  expect(i18n.language).toBe('es');
});

test('i18n has English and Spanish translation resources', () => {
  expect(i18n.getResourceBundle('en', 'translation')).toBeTruthy();
  expect(i18n.getResourceBundle('es', 'translation')).toBeTruthy();
});

test('translations exist for common keys', () => {
  expect(i18n.exists('nav.academy')).toBe(true);
  expect(i18n.exists('nav.services')).toBe(true);
  expect(i18n.exists('nav.knowUs')).toBe(true);
  expect(i18n.exists('nav.signIn')).toBe(true);
  expect(i18n.exists('home.heroTitle')).toBe(true);
  expect(i18n.exists('footer.rights')).toBe(true);
});

test('can change language to English', async () => {
  await i18n.changeLanguage('en');
  expect(i18n.language).toBe('en');
  
  await i18n.changeLanguage('es');
  expect(i18n.language).toBe('es');
});

test('locale key parity between English and Spanish', () => {
  const enKeys = flattenKeys(require('./locales/en.json'));
  const esKeys = flattenKeys(require('./locales/es.json'));
  
  const missingInEs = [...enKeys].filter(k => !esKeys.has(k));
  const missingInEn = [...esKeys].filter(k => !enKeys.has(k));
  
  expect(missingInEs.length).toBe(0);
  expect(missingInEn.length).toBe(0);
});

test('no empty-string translation values', () => {
  const en = require('./locales/en.json');
  const es = require('./locales/es.json');
  
  const emptyInEn = [];
  const emptyInEs = [];
  
  const checkEmpty = (obj, acc, prefix = '') => {
    const keys = Array.isArray(obj) ? obj.keys() : Object.keys(obj);
    for (const key of keys) {
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (obj[key] === '') {
        acc.push(fullKey);
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        checkEmpty(obj[key], acc, fullKey);
      }
    }
  };
  
  checkEmpty(en, emptyInEn);
  checkEmpty(es, emptyInEs);
  
  expect(emptyInEn.length).toBe(0);
  expect(emptyInEs.length).toBe(0);
});
