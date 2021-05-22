import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBa-4iU-zMxkT-tPyVIy_RBH695eTGT3us',
  authDomain: 'signal-react-native-f82f4.firebaseapp.com',
  projectId: 'signal-react-native-f82f4',
  storageBucket: 'signal-react-native-f82f4.appspot.com',
  messagingSenderId: '59111564623',
  appId: '1:59111564623:web:efe30ba6fbdc5e535c113a',
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
