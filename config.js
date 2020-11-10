import * as firebase from 'firebase';
require('@firebase/firestore');

// var firebaseConfig = {
//     apiKey: "AIzaSyDiNvuhkOXR9lGy2g_peApNmLrVgoZ36FQ",
//     authDomain: "willyapp-9821b.firebaseapp.com",
//     databaseURL: "https://willyapp-9821b.firebaseio.com",
//     projectId: "willyapp-9821b",
//     storageBucket: "willyapp-9821b.appspot.com",
//     messagingSenderId: "418855744162",
//     appId: "1:418855744162:web:4ec53a06c0be31a4541dfb"
//   };

var firebaseConfig = {
  apiKey: "AIzaSyCyuPH46PquxafR0UA3d_BXFGsbpbvyI_w",
  authDomain: "multiplayerproj-71bfe.firebaseapp.com",
  databaseURL: "https://multiplayerproj-71bfe.firebaseio.com",
  projectId: "multiplayerproj-71bfe",
  storageBucket: "multiplayerproj-71bfe.appspot.com",
  messagingSenderId: "29527568001",
  appId: "1:29527568001:web:bdeda424e0ae58468ca780"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
  