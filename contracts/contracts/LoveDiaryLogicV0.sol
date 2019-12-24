pragma solidity >= 0.4.24;
pragma experimental ABIEncoderV2;

import "./LoveDiaryStorage.sol";

contract LoveDiaryLogicV0 is LoveDiaryStorage {
	
	// getters
	function get_user(address addr) public view returns (User) {
		return users[addr];
	}

	function get_invitations(address addr) public view returns (bytes32[]) {
		return invitations[addr];
	}

	function get_channel(bytes32 cid) public view returns (Channel) {
		return channels[cid];
	}

	// setters
	function set_nickname(address addr, bytes nickname) public {
		users[addr].nickname = nickname;
	}

	function set_status(address addr, bool status) public {
		users[addr].status = status;
	}

	function set_sex(address addr, bool sex) public {
		users[addr].sex = sex;
	}

	function register_user(address addr, bytes nickname, bool status, bool sex) public {
		users[addr].nickname = nickname;
		users[addr].status = status;
		users[addr].sex = sex;
		users[addr].cid = 0x0;
	}

	// logic
	// register channel
	function register_channel(address user2, uint32 timestamp) public returns (bool) {
		require(users[msg.sender].cid == 0x0);

		Channel memory c;
		c.user1 = msg.sender;
		c.user2 = user2;
		c.cid = keccak256(abi.encodePacked(c.user1, c.user2));
		c.status = false;
		c.timestamp = timestamp;

		channels[c.cid] = c;
		users[msg.sender].cid = c.cid;

		invitations[c.user2].push(c.cid);
		return true;
	}

	// delete inactive channel(not approved by user2)
	function delete_channel(bytes32 cid) public returns (bool) {
		require(channels[cid].status = false);
		delete channels[cid];
		users[msg.sender].cid = 0x0;
		return true;
	}

	// approve invitation
	function approve_channel(bytes32 cid) public returns (bool) {
		require(channels[cid].user2 == msg.sender && users[msg.sender].cid == 0x0);

		channels[cid].status = true;
		users[msg.sender].status = true;
		users[channels[cid].user1].status = true;
		users[msg.sender].cid = cid;
		delete invitations[msg.sender];
		return true;
	}

	// send message
	function send_msg(bytes multihash, uint32 timestamp, uint ctype) public returns (bool) {
		require(users[msg.sender].cid != 0x0);

		Message memory m;
		m.sender = msg.sender;
		m.multihash = multihash;
		m.timestamp = timestamp;
		m.ctype = ctype;
		m.mid = keccak256(abi.encodePacked(m.sender, m.multihash, m.timestamp));

		msgs[m.mid] = m;
		return true;
	}
}
