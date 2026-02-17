const admin = require('firebase-admin');
const dotenv = require('dotenv');

dotenv.config();

try {
    admin.initializeApp({
        credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            // Handle newlines in private key string
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        }),
        databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com`
    });
    console.log("🔥 Firebase Admin Initialized");
} catch (error) {
    console.error("Firebase Init Error:", error);
}

const db = admin.database();
module.exports = { admin, db };
