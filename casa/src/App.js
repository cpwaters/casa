import firebase from "firebase/app"
import { useEffect } from 'react'
import './App.css';
import Home from './components/home';
import Shopping from './components/shopping';
import Bills from './components/bills';
import Holidays from './components/holidays';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import firestore from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAeeIzp4Rt1S2v_zV9UTKlbk8rq9NJFQDY",
  authDomain: "casa-46aeb.firebaseapp.com",
  projectId: "casa-46aeb",
  storageBucket: "casa-46aeb.appspot.com",
  messagingSenderId: "997702534673",
  appId: "1:997702534673:web:d84d1b91f1ab8760be93b0",
  measurementId: "G-9GMLYVL2T9"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}
const db = firebase.firestore();

function App() {

    db.collection('shopping')
      .get()
      .then((querySnapshot) => {
        console.log()
        querySnapshot.forEach(doc => {
           console.log(doc.data())
        })

    });

  return (
    <Router>
      <div className="App">
        <div className="App-header">
          <h1>CASA</h1>
          <Navbar />
        </div>
        <Switch>
          <Route exact path={'/'} component={Home}/>
          <Route path={'/shopping'}><Shopping /></Route>
          <Route path={'/bills'}><Bills /></Route>
          <Route path={'/holidays'}><Holidays /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
