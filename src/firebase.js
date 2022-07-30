import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCHakiAA6g3IwMrxECCRE_IiQ4seshAst8",
    authDomain: "snapchat-clone-86d6e.firebaseapp.com",
    projectId: "snapchat-clone-86d6e",
    storageBucket: "snapchat-clone-86d6e.appspot.com",
    messagingSenderId: "175805556015",
    appId: "1:175805556015:web:97e37db0c72ee66be22dda"
  };
  const firebaseaApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseaApp.firestore()
  const auth = firebase.auth()
  const storage =  firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider()
   export {db,auth,storage,provider}