import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAUi_tAHUk_ipJxrKxbPwCsRRMqTPL6OIA",
  authDomain: "chatapp-c3c1f.firebaseapp.com",
  projectId: "chatapp-c3c1f",
  storageBucket: "chatapp-c3c1f.appspot.com",
  messagingSenderId: "605857705704",
  appId: "1:605857705704:web:0dca77958233ad458fe35d"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }