import { initializeApp } from "firebase/app";
import config from "../../config.js"

console.log(config);
const firebaseConfig = {
  apiKey: config.apikey,
  authDomain: config.authdomain,
  projectId: config.projectId,
  storageBucket: config.storageBucket,
  messagingSenderId: config.messagingSenderId,
  appId: config.id
};
 

const FirebaseApp = initializeApp(firebaseConfig);

export default FirebaseApp;
