import React, { Component } from 'react';
import 'animate.css';

import Slideshow from './Slideshow';
import './styles.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Slideshow />
      </div>
    );
  }
}

export default App;

