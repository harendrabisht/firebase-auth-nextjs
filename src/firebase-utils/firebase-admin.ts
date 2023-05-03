import admin from 'firebase-admin';

if (!admin.apps.length) {
    try {
        admin.initializeApp({
            credential: admin.credential.cert({
                privateKey: process.env.FIREBASE_PRIVATE_KEY,
                clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
            })
        });
    } catch (error) {
        console.log('Firebase admin initialization error', error);
    }
}
export default admin.auth();
