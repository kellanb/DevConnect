import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from './Pages/LandingPage';
import Homepage from './components/Homepage';
import './App.css';
import AuthModal from './components/AuthModal.js';

class App extends React.Component {
 

  render() {
    return (
      <Router>
        
          <Switch>
            <Route exact path='/' component={ LandingPage } />
            <Route exact path='/home' component={ Homepage } />
          </Switch>
       <AuthModal/>

          

      </Router>
    )
  };
}

export default App;