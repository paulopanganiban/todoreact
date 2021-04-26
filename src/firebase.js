import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCRbkSTP1i6G_h26BDZkHztzH8HS37A27Q",
    authDomain: "todoreact-b4de5.firebaseapp.com",
    projectId: "todoreact-b4de5",
    storageBucket: "todoreact-b4de5.appspot.com",
    messagingSenderId: "1095936262766",
    appId: "1:1095936262766:web:080cbc2eac8c731c141c7f",
    measurementId: "G-071G8B8BNZ"
})

const db = firebaseApp.firestore()

// export { db }
export default db