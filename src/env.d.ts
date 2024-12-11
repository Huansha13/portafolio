declare interface Env {
  readonly NODE_ENV: string;
  [key: string]: any;

  readonly NG_APP_VERSION: string
  readonly NG_APP_URL_ASSETS: string
  readonly NG_APP_URL_DATA_EXCEL: string
  readonly NG_APP_FIREBASE_API_KEY: string
  readonly NG_APP_FIREBASE_AUTH_DOMAIN: string
  readonly NG_APP_FIREBASE_PROJECT_ID: string
  readonly NG_APP_FIREBASE_STORAGE_BUCKET: string
  readonly NG_APP_FIREBASE_MESSAGING_SENDER_ID: string
  readonly NG_APP_FIREBASE_APP_ID: string
  readonly NG_APP_FIREBASE_MEASUREMENT_ID: string
}

declare interface ImportMeta {
  readonly env: Env;
}
