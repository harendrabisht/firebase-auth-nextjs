import firebase from 'firebase/compat/app';
import { getMessaging, Messaging } from 'firebase/messaging'
import 'firebase/compat/auth';

let messaging: Messaging;
let app;
if (typeof window !== 'undefined' && !firebase?.apps?.length) {
    app = firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.NEXT_PUBLIC_SENDER_ID,
        appId: process.env.NEXT_PUBLIC_APP_ID,
    });
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);
    messaging = getMessaging(app);
}

export { firebase, messaging, app };
