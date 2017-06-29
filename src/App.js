import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Sms from './components/Sms';
import Header from './components/Header';
import Footer from './components/Footer';

import './App.css'

class App extends Component {
  render() {
    return (
          <Router>
              <div className="App">
                  <Header />
                  <Route path="/home" component={ Home } />
                  <Route path="/sms" component={ Sms } />
                  <Redirect to="/home"/>
                  <Footer />
              </div>
          </Router>
    );
  }
}

export default App;
