import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './App.css';

import Chatroom from './Chatroom.js';
import InfoCard from './InfoCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
		{this.props.children}
      </div>
    );
  }
}

export default App;
