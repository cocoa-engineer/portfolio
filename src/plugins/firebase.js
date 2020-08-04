import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCJ3v9zgZQ07KchvK1Nz-TOvxaujyPb5ng",
  authDomain: "cocoa-portfolio-96f55.firebaseapp.com",
  databaseURL: "https://cocoa-portfolio-96f55.firebaseio.com",
  projectId: "cocoa-portfolio-96f55",
  storageBucket: "cocoa-portfolio-96f55.appspot.com",
  messagingSenderId: "941306769028",
  appId: "1:941306769028:web:d14c1f417cb2cb03121cd1",
  measurementId: "G-QEF3XCJYJF"
};
firebase.initializeApp(config);
export const functions = firebase.functions();
