import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyAoF7wDbVSZd9EfIov-0vsX8QS3svBZPyo",
  authDomain: "instagram-react-project.firebaseapp.com",
  projectId: "instagram-react-project",
  storageBucket: "instagram-react-project.appspot.com",
  messagingSenderId: "540266381933",
  appId: "1:540266381933:web:35c790fd8029e6a70ef564",
  measurementId: "G-WZ8X1LVHRB"
});



const db = firebaseConfig.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };