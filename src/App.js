import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { RenderLink } from './renderLinks'

class App extends Component {

  render() {
    const { location } = this.props

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">JavaScript Study</h1>
          <div className="App-subtitle">made with create-react-app</div>
        </header>

        <RenderLink />
				<br></br>
				<hr></hr>
        { location.pathname === '/' ? <h2 className="app__header">Home</h2> : null }
      </div>
    );
  }
}

export default App;
