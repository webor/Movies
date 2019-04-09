import React, { Component } from 'react';
import Header from '../src/components/Header';
import './css/normalize.css';
import MovieListing from '../src/components/MovieListing';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MovieListing />
      </div>
    );
  }
}

export default App;
