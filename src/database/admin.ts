var admin = require("firebase-admin");

var serviceAccount = require("/Users/s.g/PLI-PROJECT/PLI-API/src/database/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();

// const auth  = getAuth(db)