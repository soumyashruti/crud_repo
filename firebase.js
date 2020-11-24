import firebase from "firebase";
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyCRiOsmEVcHdrhqb_4DO2qbku9WcMglK0g",
  authDomain: "react-crud-b5a7a.firebaseapp.com",
  databaseURL: "https://react-crud-b5a7a.firebaseio.com",
  projectId: "react-crud-b5a7a",
  storageBucket: "react-crud-b5a7a.appspot.com",
  messagingSenderId: "684687769033",
  appId: "1:684687769033:web:711f4e7d8016c60619fc18"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();