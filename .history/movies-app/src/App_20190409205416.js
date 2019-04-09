import React, { Component } from 'react';
import Header from '../src/components/Header';
import './App.css';
import { Provider } from 'react-redux'
import configureStore from './store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
