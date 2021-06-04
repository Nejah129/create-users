
import './App.css';
import SigneUp from './compoments/SingeUp';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Login from './compoments/Login';

import Profile from './compoments/Profile';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path ='/' component={SigneUp}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path ='/profile' component ={Profile}/>

        </Switch>
      </Router>

     
    </div>
  );
}

export default App;
