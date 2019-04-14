import React, { Component } from 'react';
import Header from '../src/components/Header';
import './css/normalize.css';
import Notifications from 'react-notify-toast';
import MovieListing from '../src/components/MovieListing';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div className="App">
      <Notifications options={{ zIndex: 9999 }} />
        <Header />
        <MovieListing />
      </div>
    );
  }
}

export default App;
