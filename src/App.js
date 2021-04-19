import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter as Router } from 'react-router-dom';


import React, { Component } from 'react';

class App extends Component {


  render() {
    return (
      <div>
        <Router>
          <Header />
          <Main />
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;


