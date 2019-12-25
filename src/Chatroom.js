import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

import Message from './Message.js';

import Web3 from 'web3';
import { StorageAddress, StorageABI, LogicV0ABI } from './contract.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
			account: "",
			channel: "",
			info: {},
            chats: [],
			showTime: false,
        };

        this.submitMessage = this.submitMessage.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.showTime = this.showTime.bind(this);
		
		this.web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
		this.storage = new this.web3.eth.Contract(StorageABI, StorageAddress);
		this.logic = new this.web3.eth.Contract(LogicV0ABI, StorageAddress);
		this.getInfo();
    }

	async getInfo() {
		const accounts = await this.web3.eth.getAccounts();
		this.setState({ account: accounts[0] });
		
		var info = {};
		const user = await this.logic.methods.get_user(this.state.account).call();
		console.log("userinfo:", user);
		info.nickname = this.web3.utils.hexToUtf8(user.nickname);
		info.sex = user.sex ? "Girl" : "Boy";
		info.status = user.status ? "In love" : "Single";
		info.cid = user.cid;
		this.setState({ info: info });

		// get channel messages
		const channel = await this.logic.methods.get_channel(this.state.info.cid).call();
		console.log(channel)
		this.setState({ channel: channel });

		var chats = [];
		for(var i = 0; i < channel.msg_ids.length; ++i) {
			var msg_id = channel.msg_ids[i];
			const msg = await this.logic.methods.get_msg(msg_id).call();
			var content = this.web3.utils.hexToUtf8(msg.multihash);
			var time = new Date(msg.timestamp * 1000);
			var chat = {
				username: msg.sender,
                content: <p>{content}</p>,
                img: this.state.info.sex == "Boy" ? "https://img.icons8.com/office/80/000000/user-female-skin-type-1-2.png" : "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png",
				time: time.toString(),
            }
			chats.push(chat);
		}
		console.log(chats)
		this.setState({ chats: chats });
	}

	showTime(e, chat) {
		console.log(chat.time)
		if(this.state.showTime == false) {
			this.setState({ showTime: true });
			//e.target.innerHTML = chat.time;
		} else {
			this.setState({ showTime: false });
			//e.target.innerHTML = chat.content.props.children;
		}
	}

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    async submitMessage(e) {
        e.preventDefault();

		var msg = ReactDOM.findDOMNode(this.refs.msg).value;

		// call contract send_msg
		var msg_bytes = this.web3.utils.toHex(msg);
		var timestamp = Math.round(Date.now() / 1000);
		var ctype = 0;
		const ret = await this.logic.methods.send_msg(msg_bytes, timestamp, ctype).send({ from: this.state.account });
		console.log(ret);
		if(ret.status == true) {
			console.log("send message success");
		} else {
			console.log("send message failed");
		}

		var time = new Date(timestamp * 1000);
		this.setState({
            chats: this.state.chats.concat([{
                username: this.state.info.nickname,
                content: <p>{msg}</p>,
                img: this.state.info.sex == "Girl" ? "https://img.icons8.com/office/80/000000/user-female-skin-type-1-2.png" : "https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png",
				time: time.toString(),
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = this.state.account;
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>LoveDiary</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message id={chat.time} chat={chat} user={username} onClick={(e) => this.showTime(e, chat)} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;
