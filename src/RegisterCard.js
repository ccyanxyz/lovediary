import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { browserHistory } from 'react-router'
import './App.css';

import Web3 from 'web3';
import { StorageAddress, StorageABI, LogicV0ABI } from './contract.js';

class RegisterCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			nickname: '',
			data: ['boy', 'girl'],
			checked: [],
			account: '',
		};
		this.setNickname = this.setNickname.bind(this);
		this.handleCheck = this.handleCheck.bind(this);
		this.connectWallet = this.connectWallet.bind(this);
		this.register = this.register.bind(this);
		this.getAccount = this.getAccount.bind(this);

		this.web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
		this.storage = new this.web3.eth.Contract(StorageABI, StorageAddress);
		this.logic = new this.web3.eth.Contract(LogicV0ABI, StorageAddress);
		this.getAccount();
	}

	async getAccount() {
		const accounts = await this.web3.eth.getAccounts();
		this.setState({ account: accounts[0] });
	}

	async connectWallet() {
		console.log(this.state)
		// check if already registered, if yes, goto main page
		const user = await this.logic.methods.get_user(this.state.account).call();
		console.log(user);
		if(user.nickname === "0x") {
			console.log("not registered")
		} else {
			console.log("registered")
			browserHistory.push("/main")
		}
	}

	async register() {
		const impl = await this.storage.methods.implementation().call();
		console.log(impl)
		console.log(this.state)
		// call contract, register user
		var sex = false; // false for boy, true for girl
		if(this.state.checked.includes("girl")) {
			sex = true;
		}
		var status = false; // single
		var nickname = this.web3.utils.toHex(this.state.nickname);
		var address = this.web3.utils.toChecksumAddress(this.state.account);
		await this.logic.methods.register_user(address, nickname, status, sex).send({ from: this.state.account });
		// if register success, goto main page
		const user = await this.logic.methods.get_user(this.state.account).call();
		if(user.nickname === "0x") {
			console.log("register failed");
		} else {
			console.log("register success");
			browserHistory.push("/main");
		}
	}

	setNickname(e) {
		this.setState({ nickname: e.target.value })
	}

	handleCheck(e, x) {
		this.setState(state => ({
			checked: state.checked.includes(x) ? state.checked.filter(c => c !== x) : [...state.checked, x]
		}));
	}

    render() {
		return (
			<div className="registercard">
				<h3>LoveDiary</h3>
                <form className="card">
					<FormGroup row>
						<TextField id="outlined-basic" label="Nickname" onChange={e => this.setNickname(e)} />	
					</FormGroup>
					<FormGroup row>
						<FormControlLabel
							control={
								  <Checkbox checked={this.state.checked.includes('boy')} onChange={e => this.handleCheck(e, 'boy')} value="boy" />
							}
							label="Boy"
						 />
				
						<FormControlLabel
							control={
								  <Checkbox checked={this.state.checked.includes('girl')} onChange={e => this.handleCheck(e, 'girl')} value="girl" />
							}
							label="Girl"
						 />
					</FormGroup>

					<Button color="primary" onClick={e => this.register()}>
						Register
					</Button>
					<Button color="primary" onClick={e => this.connectWallet()}>
						Connect Wallet
					</Button>
                </form>
			</div>
        );
    }
}

export default RegisterCard;
