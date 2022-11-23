import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDmjj6tzj_akf6ArZr2u7EBCbi2Ul-qBxo',
  authDomain: 'miniblog-de5f8.firebaseapp.com',
  projectId: 'miniblog-de5f8',
  storageBucket: 'miniblog-de5f8.appspot.com',
  messagingSenderId: '249577448821',
  appId: '1:249577448821:web:482523af7b1780cf731f3c',
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
