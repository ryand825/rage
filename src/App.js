import React, { Component } from 'react';
import './App.css';
import TopNav from './components/TopNav/TopNav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <p className="App-intro">
          test
        </p>
      </div>
    );
  }
}

export default App;
