import React from 'react';

class Message extends React.Component {
 	render() {
		var chat = this.props.chat;
		var user = this.props.user;
		return (
			<li className={`chat ${user === chat.username ? "right" : "left"}`} onClick={this.props.onClick}>
				{user !== chat.username
					&& <img src={chat.img} alt={`${chat.username}'s profile pic`} />
				}
				{chat.content}
			</li>
		)
	}
}

export default Message;
