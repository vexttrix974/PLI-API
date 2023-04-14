import firebaseConfig from "./config";

const { initializeApp }  = require('firebase/app') ;

const appFire = initializeApp(firebaseConfig)

export default appFire;