import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const FirebaseInittialize = () => {
  initializeApp(firebaseConfig);
};

export default FirebaseInittialize;
