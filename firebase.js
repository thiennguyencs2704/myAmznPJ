import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJInWEL0YLLAAudubAmLHbt-EkitaHVW8",
  authDomain: "my-amzn-web.firebaseapp.com",
  projectId: "my-amzn-web",
  storageBucket: "my-amzn-web.appspot.com",
  messagingSenderId: "493663840848",
  appId: "1:493663840848:web:9c94a78a5efa274300bf55",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const auth = firebase.auth();
const db = firebaseApp.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
const realtimeDB = firebase.database();
export { db, auth, provider, realtimeDB };
