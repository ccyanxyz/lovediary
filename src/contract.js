export const StorageAddress = "0x158a820D6034ADC37f90649e7F108bD6D79Fd696";
export const LogicV0Address = "0x80A9d7D03d575CDB0c1f50ac969A55Dc41E2E666";

export const StorageABI = [{'constant': true,
  'inputs': [],
  'name': 'proxyOwner',
  'outputs': [{'name': 'owner', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'bytes32'}],
  'name': 'msgs',
  'outputs': [{'name': 'sender', 'type': 'address'},
   {'name': 'multihash', 'type': 'bytes'},
   {'name': 'timestamp', 'type': 'uint32'},
   {'name': 'ctype', 'type': 'uint256'},
   {'name': 'mid', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'implementation', 'type': 'address'}],
  'name': 'upgradeTo',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'implementation', 'type': 'address'},
   {'name': 'data', 'type': 'bytes'}],
  'name': 'upgradeToAndCall',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'},
 {'constant': true,
  'inputs': [],
  'name': 'implementation',
  'outputs': [{'name': 'impl', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'bytes32'}],
  'name': 'channels',
  'outputs': [{'name': 'user1', 'type': 'address'},
   {'name': 'user2', 'type': 'address'},
   {'name': 'cid', 'type': 'bytes32'},
   {'name': 'status', 'type': 'bool'},
   {'name': 'timestamp', 'type': 'uint32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'uint256'}],
  'name': 'invitations',
  'outputs': [{'name': '', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'address'}],
  'name': 'users',
  'outputs': [{'name': 'nickname', 'type': 'bytes'},
   {'name': 'status', 'type': 'bool'},
   {'name': 'sex', 'type': 'bool'},
   {'name': 'cid', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'newOwner', 'type': 'address'}],
  'name': 'transferProxyOwnership',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'payable': true, 'stateMutability': 'payable', 'type': 'fallback'},
 {'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'previousOwner', 'type': 'address'},
   {'indexed': false, 'name': 'newOwner', 'type': 'address'}],
  'name': 'ProxyOwnershipTransferred',
  'type': 'event'},
 {'anonymous': false,
  'inputs': [{'indexed': true, 'name': 'implementation', 'type': 'address'}],
  'name': 'Upgraded',
  'type': 'event'}];

export const LogicV0ABI = [{'constant': true,
  'inputs': [],
  'name': 'proxyOwner',
  'outputs': [{'name': 'owner', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'bytes32'}],
  'name': 'msgs',
  'outputs': [{'name': 'sender', 'type': 'address'},
   {'name': 'multihash', 'type': 'bytes'},
   {'name': 'timestamp', 'type': 'uint32'},
   {'name': 'ctype', 'type': 'uint256'},
   {'name': 'mid', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'implementation', 'type': 'address'}],
  'name': 'upgradeTo',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'implementation', 'type': 'address'},
   {'name': 'data', 'type': 'bytes'}],
  'name': 'upgradeToAndCall',
  'outputs': [],
  'payable': true,
  'stateMutability': 'payable',
  'type': 'function'},
 {'constant': true,
  'inputs': [],
  'name': 'implementation',
  'outputs': [{'name': 'impl', 'type': 'address'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'bytes32'}],
  'name': 'channels',
  'outputs': [{'name': 'user1', 'type': 'address'},
   {'name': 'user2', 'type': 'address'},
   {'name': 'cid', 'type': 'bytes32'},
   {'name': 'status', 'type': 'bool'},
   {'name': 'timestamp', 'type': 'uint32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'address'}, {'name': '', 'type': 'uint256'}],
  'name': 'invitations',
  'outputs': [{'name': '', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': '', 'type': 'address'}],
  'name': 'users',
  'outputs': [{'name': 'nickname', 'type': 'bytes'},
   {'name': 'status', 'type': 'bool'},
   {'name': 'sex', 'type': 'bool'},
   {'name': 'cid', 'type': 'bytes32'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'newOwner', 'type': 'address'}],
  'name': 'transferProxyOwnership',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'payable': true, 'stateMutability': 'payable', 'type': 'fallback'},
 {'anonymous': false,
  'inputs': [{'indexed': false, 'name': 'previousOwner', 'type': 'address'},
   {'indexed': false, 'name': 'newOwner', 'type': 'address'}],
  'name': 'ProxyOwnershipTransferred',
  'type': 'event'},
 {'anonymous': false,
  'inputs': [{'indexed': true, 'name': 'implementation', 'type': 'address'}],
  'name': 'Upgraded',
  'type': 'event'},
 {'constant': true,
  'inputs': [{'name': 'addr', 'type': 'address'}],
  'name': 'get_user',
  'outputs': [{'components': [{'name': 'nickname', 'type': 'bytes'},
     {'name': 'status', 'type': 'bool'},
     {'name': 'sex', 'type': 'bool'},
     {'name': 'cid', 'type': 'bytes32'}],
    'name': '',
    'type': 'tuple'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': 'addr', 'type': 'address'}],
  'name': 'get_invitations',
  'outputs': [{'name': '', 'type': 'bytes32[]'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': 'cid', 'type': 'bytes32'}],
  'name': 'get_channel',
  'outputs': [{'components': [{'name': 'user1', 'type': 'address'},
     {'name': 'user2', 'type': 'address'},
     {'name': 'cid', 'type': 'bytes32'},
     {'name': 'status', 'type': 'bool'},
     {'name': 'timestamp', 'type': 'uint32'},
     {'name': 'msg_ids', 'type': 'bytes32[]'}],
    'name': '',
    'type': 'tuple'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': true,
  'inputs': [{'name': 'mid', 'type': 'bytes32'}],
  'name': 'get_msg',
  'outputs': [{'components': [{'name': 'sender', 'type': 'address'},
     {'name': 'multihash', 'type': 'bytes'},
     {'name': 'timestamp', 'type': 'uint32'},
     {'name': 'ctype', 'type': 'uint256'},
     {'name': 'mid', 'type': 'bytes32'}],
    'name': '',
    'type': 'tuple'}],
  'payable': false,
  'stateMutability': 'view',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'addr', 'type': 'address'},
   {'name': 'nickname', 'type': 'bytes'}],
  'name': 'set_nickname',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'addr', 'type': 'address'},
   {'name': 'status', 'type': 'bool'}],
  'name': 'set_status',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'addr', 'type': 'address'},
   {'name': 'sex', 'type': 'bool'}],
  'name': 'set_sex',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'addr', 'type': 'address'},
   {'name': 'nickname', 'type': 'bytes'},
   {'name': 'status', 'type': 'bool'},
   {'name': 'sex', 'type': 'bool'}],
  'name': 'register_user',
  'outputs': [],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'user2', 'type': 'address'},
   {'name': 'timestamp', 'type': 'uint32'}],
  'name': 'register_channel',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'cid', 'type': 'bytes32'}],
  'name': 'delete_channel',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'cid', 'type': 'bytes32'}],
  'name': 'approve_channel',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'},
 {'constant': false,
  'inputs': [{'name': 'multihash', 'type': 'bytes'},
   {'name': 'timestamp', 'type': 'uint32'},
   {'name': 'ctype', 'type': 'uint256'}],
  'name': 'send_msg',
  'outputs': [{'name': '', 'type': 'bool'}],
  'payable': false,
  'stateMutability': 'nonpayable',
  'type': 'function'}];
