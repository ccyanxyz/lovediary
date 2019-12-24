import React from 'react';
import ReactDOM from 'react-dom';
import Chip from '@material-ui/core/Chip';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import './App.css';
import Message from './Message.js';

import Web3 from 'web3';
import { StorageAddress, StorageABI, LogicV0ABI } from './contract.js';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
		this.state = {
			account: "",
			info: {},
			invitations: ["No friend invitation"],
			receiver: "",
			message: "",
		}
		this.setReceiver = this.setReceiver.bind(this);
		this.sendInvitation = this.sendInvitation.bind(this);
		this.acceptInvitation = this.acceptInvitation.bind(this);

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
		this.setState({ info: info });

		const req_ids = await this.logic.methods.get_invitations(this.state.account).call();
		var invitations = [];
		for(var i = 0; i < req_ids.length; ++i) {
			var id = req_ids[i];
			const invitation = await this.logic.methods.get_channel(id).call();
			const user1 = await this.logic.methods.get_user(invitation.user1).call();
			var inv = {
				address: invitation.user1,
				nickname: this.web3.utils.hexToUtf8(user1.nickname),
				cid: id,
			};
			invitations.push(inv);
		}
		if(invitations.length == 0) {
			invitations = [
				{ 
					address: "0x0",
				  	nickname: "No friend invitation",
					cid: "0x0",
				}
			];
		}
		console.log(invitations);
		this.setState({ invitations: invitations });
	}

	setReceiver = e => {
		this.setState({ receiver: e.target.value });
	}

	async sendInvitation() {
		console.log(this.state)
		var timestamp = Math.round(Date.now() / 1000);
		var ctype = 0;
		const ret = await this.logic.methods.register_channel(this.state.receiver, timestamp).send({ from: this.state.account });
		if(ret == false) {
			console.log("send invitation failed");
		} else {
			console.log("send invitation success");
		}
	}

	async acceptInvitation(e) {
		console.log(e.target.innerHTML)
		var user1 = e.target.innerHTML;
		var cid;
		for(var i = 0; i < this.state.invitations.length; ++i) {
			if(this.state.invitations[i].nickname == user1) {
				cid = this.state.invitations[i].cid;
			}
		}
		console.log(cid)
		if(cid == "0x0") {
			return;
		}
		const ret = await this.logic.methods.approve_channel(cid).send({ from: this.state.account });
		const user = await this.logic.methods.get_user(this.state.account).call();
		console.log(user);
		if(ret == true) {
			console.log("channel approve success");
		} else {
			console.log("channel approve failed");
		}
	}

    render() {

        return (
            <div className="chatroom">
                <h3>Personal Center</h3>
                <ul className="info">
					<div className="line">
					<h3>My Infomation</h3>
					</div>
					<div className="line">
					<Chip label={this.state.account} color="secondary" variant="outlined" />
					</div>
					<div className="line">
					<FormGroup row>
					<Chip label={this.state.info.sex} color="secondary" variant="outlined" />
					</FormGroup>
					</div>
					<div className="line">
					<FormGroup row>
					<Chip label={this.state.info.status} color="secondary" variant="outlined" />
					</FormGroup>
					</div>
					<div className="line">
					<h3>Received Invitations</h3>
					</div>
					<div className="line">
						{this.state.invitations.map(invitation => (
							<Chip label={invitation.nickname} color="secondary" variant="outlined" deleteIcon={<DoneIcon />} onClick={this.acceptInvitation} />	
						))}
					</div>

					<div className="line">
					<h3>Send Invitation</h3>
					</div>
					<div className="line">
					<TextField id="outlined" label="Receiver" onChange={this.setReceiver} />
					<Button varint="contained" color="primary" onClick={e => this.sendInvitation()}>
						Send invitation
					</Button>
					</div>
                </ul>
            </div>
        );
    }
}

export default InfoCard;
