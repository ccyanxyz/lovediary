import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import './App.css';

import Chatroom from './Chatroom.js';
import InfoCard from './InfoCard.js';
import AutorenewOutlinedIcon from '@material-ui/icons/AutorenewOutlined';

class Main extends Component {
  render() {
    return (
		<Flippy flipOnHover={false} flipOnClick={false} flipDirection="horizontal" ref={(r) => this.flippy = r}>
			<FrontSide>
				<InfoCard />
				<div className="flip">
					<AutorenewOutlinedIcon className="flip" onClick={() => this.flippy.toggle()} />
				</div>
			</FrontSide>
        	<BackSide>	
				<Chatroom />
				<div className="flip">
					<AutorenewOutlinedIcon className="flip" onClick={() => this.flippy.toggle()} />
				</div>
			</BackSide>
		</Flippy>
    );
  }
}

export default Main;
