import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './App.css';

import Chatroom from './Chatroom.js';
import InfoCard from './InfoCard.js';

class Main extends Component {
  render() {
    return (
		<Flippy flipOnHover={false} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r}>
			<FrontSide>
				<InfoCard />
				<button className="flip" onClick={() => this.flippy.toggle()}>Flip</button>
			</FrontSide>
        	<BackSide>	
				<Chatroom />
				<button className="flip" onClick={() => this.flippy.toggle()}>Flip</button>
			</BackSide>
		</Flippy>
    );
  }
}

export default Main;
