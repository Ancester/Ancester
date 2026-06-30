import i18n from './i18n';

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
