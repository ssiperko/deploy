import React, { Component } from 'react';
import {Header} from './Components/Header';
import {Main} from './Main';
import {Foot} from './Components/Foot';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Main />
          <Foot />
      </div>
    );
  }
}

export default App;
