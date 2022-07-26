import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBbljunmErrFLUh2QqD1sJqveAHHII1YyQ",
  authDomain: "scar-face-cooking-site.firebaseapp.com",
  projectId: "scar-face-cooking-site",
  storageBucket: "scar-face-cooking-site.appspot.com",
  messagingSenderId: "945912146067",
  appId: "1:945912146067:web:c156b14daa92788222c566"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init firestore
const projectFireStore = firebase.firestore()


export { projectFireStore }