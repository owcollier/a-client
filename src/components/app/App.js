import React, { Component } from 'react';
import TopNav from '../top-nav/top-nav';
import Main from '../main/main';
import Footer from '../footer/footer';
import './app.css';


export class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
