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
            chats: [{
                username: "Alice Chen",
                content: <p>Definitely! Sounds great!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
		this.getInfo = this.getInfo.bind(this);
		
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
		this.setState({ channel: channel });

		var chats = [];
		for(var i = 0; i < channel.msg_ids.length; ++i) {
			var msg_id = channel.msg_ids[i];
			const msg = await this.logic.methods.get_msg(msg_id).call();
			var chat = {
				username: msg.sender,
                content: <p>this.web3.utils.hexToUtf8(msg.multihash)</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }
			chats.push(chat);
		}

		this.setState({ chats: chats });
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

		this.setState({
            chats: this.state.chats.concat([{
                username: this.state.info.nickname,
                content: <p>{msg}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
        });
    }

    render() {
        const username = this.state.info.nickname;
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>LoveDiary</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
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
