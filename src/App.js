
import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About  from './components/About';
import CardA  from './components/Card';
import Appid  from './Appid';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/cardA' component={CardA} />
          <Route path='/Appid' component={Appid} />

  
        </Switch>
      </Router>
    </>
  );
}

export default App;