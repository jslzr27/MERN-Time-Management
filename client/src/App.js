import React, { Component } from 'react';
import Navbar from "./components/Navbar/index.js";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer/index.js";


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header /> 
        <Footer />
      </div>
    );
  }
}

export default App;
