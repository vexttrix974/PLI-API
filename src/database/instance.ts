import firebaseConfig from "./config";

const { initializeApp }  = require('firebase/app') ;

const db = initializeApp(firebaseConfig)

export default db;