export const environment = {
  production: false,
  appVersion: import.meta.env.NG_APP_VERSION,
  base_url_assets: import.meta.env.NG_APP_URL_ASSETS,
  data_cv: import.meta.env.NG_APP_URL_DATA_EXCEL,
  translationsUrl: import.meta.env.NG_APP_TRANSLATIONS_URL || 'https://your-storage-url.com/translations'
};
