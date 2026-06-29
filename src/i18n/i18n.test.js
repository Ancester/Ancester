import i18n from './i18n';

test('i18n is initialized with Spanish as default language', () => {
  expect(i18n.isInitialized).toBe(true);
  expect(i18n.language).toBe('es');
});

test('i18n has English and Spanish translation resources', () => {
  expect(i18n.getResourceBundle('en', 'translation')).toBeTruthy();
  expect(i18n.getResourceBundle('es', 'translation')).toBeTruthy();
});

test('translations return correct keys', () => {
  expect(i18n.t('nav.home')).toBeTruthy();
});

test('can change language to English', () => {
  i18n.changeLanguage('en');
  expect(i18n.language).toBe('en');
  
  i18n.changeLanguage('es');
  expect(i18n.language).toBe('es');
});
