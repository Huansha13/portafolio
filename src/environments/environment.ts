export const environment = {
  production: false,
  appVersion: import.meta.env.NG_APP_VERSION,
  base_url_assets: import.meta.env.NG_APP_URL_ASSETS,
  data_cv: import.meta.env.NG_APP_URL_DATA_EXCEL,
  translationsUrl: import.meta.env.NG_APP_TRANSLATIONS_URL || 'https://your-storage-url.com/translations',
  firebase: {
    apiKey: import.meta.env.NG_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.NG_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.NG_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.NG_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.NG_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.NG_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.NG_APP_FIREBASE_MEASUREMENT_ID
  }
};
