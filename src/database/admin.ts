
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

 const db = admin.firestore(); 
 db.settings({ ignoreUndefinedProperties: true })

 export {db};