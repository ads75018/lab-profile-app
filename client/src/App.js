import { format } from 'morgan';
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Signup from './components/auth/Signup'; 


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      {/* <Switch>

       
          <Route exact path="/Signup"/>
          <Route exact path="/Login"/>
  
      </Switch> */}

        <Link to="/Signup" style={{ textDecoration: 'none' }}><button>Singup</button></Link>
        <Link to="/Login" style={{ textDecoration: 'none' }}><button>Login</button></Link>
        
        <Switch>
      <Route exact path="/signup" component={Signup}/> {/* HERE */}
      <Route exact path="/projects" component={ProjectList}/>
      <Route exact path="/projects/:id" component={ProjectDetails} />
    </Switch>


      </header>
    </div>
  );
}

export default App;
