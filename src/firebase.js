import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDII_pPQ0KtYyRb9KM7qAUifDJrnHd1KRA",
    authDomain: "crud-944f1.firebaseapp.com",
    projectId: "crud-944f1",
    storageBucket: "crud-944f1.appspot.com",
    messagingSenderId: "635104731382",
    appId: "1:635104731382:web:804f0adc493cea18ba4cd7"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
