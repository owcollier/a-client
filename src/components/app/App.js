import React, { Component } from 'react';
import TopNav from '../top-nav/top-nav';
import './app.css';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
      </div>
    );
  }
}

export default App;
