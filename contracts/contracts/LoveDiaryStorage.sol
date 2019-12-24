pragma solidity >=0.4.24;

import "./OwnedUpgradeabilityProxy.sol";

contract LoveDiaryStorage is OwnedUpgradeabilityProxy {
	// message in channel or friend request message
	struct Message {
		address sender;
		bytes multihash; // msg content if ctype == 0, else ipfs multihash
		uint32 timestamp;
		uint ctype; // content type, 0 for string, 1 for img, 2 for video
		bytes32 mid; // message id = keccak(sender + multihash + timestamp)
	}

	// relationship channel
	struct Channel {
		address user1;
		address user2;
		bytes32 cid; // channel id = keccak(user1 + user2)
		bool status; // 0 for inactive, 1 for active
		uint32 timestamp; // channel start time
		bytes32[] msg_ids; // list of message ids
	}

	// user info
	struct User {
		bytes nickname;
		bool status; // 0 for single, else 1
		bool sex; // 0 for man, 1 for woman
		bytes32 cid; // user's relationship channel
	}

	mapping(address => User) public users;
	mapping(bytes32 => Channel) public channels;
	mapping(bytes32 => Message) public msgs;
	mapping(address => bytes32[]) public invitations; // channel invitations received
}
