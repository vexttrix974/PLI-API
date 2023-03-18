import firebaseConfig from "./config";
const firebase = require('firebase');

const db = firebase.initializeApp(firebaseConfig)

export default db;