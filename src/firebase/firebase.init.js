import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const FirebaseAuth = () => {
    return initializeApp(firebaseConfig);
}
export default FirebaseAuth;
