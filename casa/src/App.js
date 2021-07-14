import './App.css';
import Home from './components/home';
import Shopping from './components/shopping';
import Bills from './components/bills';
import Holidays from './components/holidays';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
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
