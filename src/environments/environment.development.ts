export const environment = {
    production: true,
    firebase: {
      apiKey: process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
      projectId: process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
      appId: process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
      storageBucket: process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
      authDomain: process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
      messagingSenderId: process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
      measurementId: process.env['NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID']
    }
  };
  