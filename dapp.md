要点：

1. public channels 公开的狗粮频道  免费/付费订阅
2. my channel 私有频道，可设置免费/付费公开
3. friend request 收到的好友请求 ，只能接受一个
4. subscribed channels 订阅的频道

实现：

1. 管理合约，管理所有channel和用户
2. 每个channel一个合约，记录历史信息（保存到ipfs）的multihash
3. 