(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){e.exports=n(440)},225:function(e,t,n){},237:function(e,t){},259:function(e,t){},261:function(e,t){},327:function(e,t){},440:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(12),o=n.n(i),c=n(36),r=(n(225),n(25)),l=n(26),u=n(29),p=n(27),m=n(30),y=(n(61),function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},this.props.children)}}]),t}(a.Component)),d=n(201),h=n(17),b=n.n(h),f=n(32),g=n(14),v=n(475),w=n(476),k=n(469),O=n(474),x=n(473),E=n(38),j=n.n(E),M="0x158a820D6034ADC37f90649e7F108bD6D79Fd696",C=[{constant:!0,inputs:[],name:"proxyOwner",outputs:[{name:"owner",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"msgs",outputs:[{name:"sender",type:"address"},{name:"multihash",type:"bytes"},{name:"timestamp",type:"uint32"},{name:"ctype",type:"uint256"},{name:"mid",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"implementation",type:"address"}],name:"upgradeTo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"implementation",type:"address"},{name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"implementation",outputs:[{name:"impl",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"channels",outputs:[{name:"user1",type:"address"},{name:"user2",type:"address"},{name:"cid",type:"bytes32"},{name:"status",type:"bool"},{name:"timestamp",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"invitations",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"users",outputs:[{name:"nickname",type:"bytes"},{name:"status",type:"bool"},{name:"sex",type:"bool"},{name:"cid",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferProxyOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"previousOwner",type:"address"},{indexed:!1,name:"newOwner",type:"address"}],name:"ProxyOwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"implementation",type:"address"}],name:"Upgraded",type:"event"}],N=[{constant:!0,inputs:[],name:"proxyOwner",outputs:[{name:"owner",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"msgs",outputs:[{name:"sender",type:"address"},{name:"multihash",type:"bytes"},{name:"timestamp",type:"uint32"},{name:"ctype",type:"uint256"},{name:"mid",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"implementation",type:"address"}],name:"upgradeTo",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"implementation",type:"address"},{name:"data",type:"bytes"}],name:"upgradeToAndCall",outputs:[],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[],name:"implementation",outputs:[{name:"impl",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"bytes32"}],name:"channels",outputs:[{name:"user1",type:"address"},{name:"user2",type:"address"},{name:"cid",type:"bytes32"},{name:"status",type:"bool"},{name:"timestamp",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"uint256"}],name:"invitations",outputs:[{name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"users",outputs:[{name:"nickname",type:"bytes"},{name:"status",type:"bool"},{name:"sex",type:"bool"},{name:"cid",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferProxyOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{anonymous:!1,inputs:[{indexed:!1,name:"previousOwner",type:"address"},{indexed:!1,name:"newOwner",type:"address"}],name:"ProxyOwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"implementation",type:"address"}],name:"Upgraded",type:"event"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"get_user",outputs:[{components:[{name:"nickname",type:"bytes"},{name:"status",type:"bool"},{name:"sex",type:"bool"},{name:"cid",type:"bytes32"}],name:"",type:"tuple"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"addr",type:"address"}],name:"get_invitations",outputs:[{name:"",type:"bytes32[]"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"cid",type:"bytes32"}],name:"get_channel",outputs:[{components:[{name:"user1",type:"address"},{name:"user2",type:"address"},{name:"cid",type:"bytes32"},{name:"status",type:"bool"},{name:"timestamp",type:"uint32"},{name:"msg_ids",type:"bytes32[]"}],name:"",type:"tuple"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"mid",type:"bytes32"}],name:"get_msg",outputs:[{components:[{name:"sender",type:"address"},{name:"multihash",type:"bytes"},{name:"timestamp",type:"uint32"},{name:"ctype",type:"uint256"},{name:"mid",type:"bytes32"}],name:"",type:"tuple"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"nickname",type:"bytes"}],name:"set_nickname",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"status",type:"bool"}],name:"set_status",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"sex",type:"bool"}],name:"set_sex",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"addr",type:"address"},{name:"nickname",type:"bytes"},{name:"status",type:"bool"},{name:"sex",type:"bool"}],name:"register_user",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"user2",type:"address"},{name:"timestamp",type:"uint32"}],name:"register_channel",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"cid",type:"bytes32"}],name:"delete_channel",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"cid",type:"bytes32"}],name:"approve_channel",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"multihash",type:"bytes"},{name:"timestamp",type:"uint32"},{name:"ctype",type:"uint256"}],name:"send_msg",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"}],_=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={nickname:"",data:["boy","girl"],checked:[],account:""},n.setNickname=n.setNickname.bind(Object(g.a)(Object(g.a)(n))),n.handleCheck=n.handleCheck.bind(Object(g.a)(Object(g.a)(n))),n.connectWallet=n.connectWallet.bind(Object(g.a)(Object(g.a)(n))),n.register=n.register.bind(Object(g.a)(Object(g.a)(n))),n.getAccount=n.getAccount.bind(Object(g.a)(Object(g.a)(n))),n.web3=new j.a(j.a.givenProvider||"http://localhost:8545"),n.storage=new n.web3.eth.Contract(C,M),n.logic=new n.web3.eth.Contract(N,M),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getAccount",value:function(){var e=Object(f.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.ethereum.enable();case 3:this.state.account=window.ethereum.selectedAddress,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("please install/unlock metamask!");case 9:case"end":return e.stop()}},e,this,[[0,6]])}));return function(){return e.apply(this,arguments)}}()},{key:"connectWallet",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAccount();case 2:return console.log(this.state),e.next=5,this.logic.methods.get_user(this.state.account).call();case 5:t=e.sent,console.log(t),"0x"===t.nickname?console.log("not registered"):(console.log("registered"),c.d.push("/main"));case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"register",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,n,a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getAccount();case 2:return e.next=4,this.storage.methods.implementation().call();case 4:return console.log(this.state),t=!1,this.state.checked.includes("girl")&&(t=!0),!1,n=this.web3.utils.toHex(this.state.nickname),a=this.web3.utils.toChecksumAddress(this.state.account),e.next=12,this.logic.methods.register_user(a,n,!1,t).send({from:this.state.account});case 12:return e.next=14,this.logic.methods.get_user(this.state.account).call();case 14:"0x"===e.sent.nickname?console.log("register failed"):(console.log("register success"),c.d.push("/main"));case 16:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"setNickname",value:function(e){this.setState({nickname:e.target.value})}},{key:"handleCheck",value:function(e,t){this.setState(function(e){return{checked:e.checked.includes(t)?e.checked.filter(function(e){return e!==t}):[].concat(Object(d.a)(e.checked),[t])}})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"registercard"},s.a.createElement("h3",null,"LoveDiary"),s.a.createElement("form",{className:"card"},s.a.createElement(k.a,{row:!0},s.a.createElement(O.a,{id:"outlined-basic",label:"Nickname",onChange:function(t){return e.setNickname(t)}})),s.a.createElement(k.a,{row:!0},s.a.createElement(w.a,{control:s.a.createElement(v.a,{checked:this.state.checked.includes("boy"),onChange:function(t){return e.handleCheck(t,"boy")},value:"boy"}),label:"Boy"}),s.a.createElement(w.a,{control:s.a.createElement(v.a,{checked:this.state.checked.includes("girl"),onChange:function(t){return e.handleCheck(t,"girl")},value:"girl"}),label:"Girl"})),s.a.createElement(x.a,{color:"primary",onClick:function(t){return e.register()}},"Register"),s.a.createElement(x.a,{color:"primary",onClick:function(t){return e.connectWallet()}},"Connect Wallet")))}}]),t}(s.a.Component),T=n(91),S=n.n(T),I=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.chat,t=this.props.user;return s.a.createElement("li",{className:"chat ".concat(t===e.username?"right":"left"),onClick:this.props.onClick},t!==e.username&&s.a.createElement("img",{src:e.img,alt:"".concat(e.username,"'s profile pic")}),e.content)}}]),t}(s.a.Component),D=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).state={account:"",channel:"",info:{},chats:[],showTime:!1},n.submitMessage=n.submitMessage.bind(Object(g.a)(Object(g.a)(n))),n.getInfo=n.getInfo.bind(Object(g.a)(Object(g.a)(n))),n.showTime=n.showTime.bind(Object(g.a)(Object(g.a)(n))),n.web3=new j.a(j.a.givenProvider||"http://localhost:8545"),n.storage=new n.web3.eth.Contract(C,M),n.logic=new n.web3.eth.Contract(N,M),n.getInfo(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getInfo",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,n,a,i,o,c,r,l,u,p,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getAccounts();case 2:return t=e.sent,this.setState({account:t[0]}),n={},e.next=7,this.logic.methods.get_user(this.state.account).call();case 7:return a=e.sent,console.log("userinfo:",a),n.nickname=this.web3.utils.hexToUtf8(a.nickname),n.sex=a.sex?"Girl":"Boy",n.status=a.status?"In love":"Single",n.cid=a.cid,this.setState({info:n}),e.next=16,this.logic.methods.get_channel(this.state.info.cid).call();case 16:i=e.sent,console.log(i),this.setState({channel:i}),o=[],c=0;case 21:if(!(c<i.msg_ids.length)){e.next=33;break}return r=i.msg_ids[c],e.next=25,this.logic.methods.get_msg(r).call();case 25:l=e.sent,u=this.web3.utils.hexToUtf8(l.multihash),p=new Date(1e3*l.timestamp),m={username:l.sender,content:s.a.createElement("p",null,u),img:"Boy"===this.state.info.sex?"https://img.icons8.com/office/80/000000/user-female-skin-type-1-2.png":"https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png",time:p.toString()},o.push(m);case 30:++c,e.next=21;break;case 33:console.log(o),this.setState({chats:o});case 35:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"showTime",value:function(e,t){console.log(t.time),!1===this.state.showTime?this.setState({showTime:!0}):this.setState({showTime:!1})}},{key:"componentDidMount",value:function(){this.scrollToBot()}},{key:"componentDidUpdate",value:function(){this.scrollToBot()}},{key:"scrollToBot",value:function(){o.a.findDOMNode(this.refs.chats).scrollTop=o.a.findDOMNode(this.refs.chats).scrollHeight}},{key:"submitMessage",value:function(){var e=Object(f.a)(b.a.mark(function e(t){var n,a,i,c,r,l=this;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=o.a.findDOMNode(this.refs.msg).value,a=this.web3.utils.toHex(n),i=Math.round(Date.now()/1e3),0,e.next=7,this.logic.methods.send_msg(a,i,0).send({from:this.state.account});case 7:c=e.sent,console.log(c),!0===c.status?console.log("send message success"):console.log("send message failed"),r=new Date(1e3*i),this.setState({chats:this.state.chats.concat([{username:this.state.info.nickname,content:s.a.createElement("p",null,n),img:"Girl"===this.state.info.sex?"https://img.icons8.com/office/80/000000/user-female-skin-type-1-2.png":"https://img.icons8.com/dusk/64/000000/user-male-skin-type-5.png",time:r.toString()}])},function(){o.a.findDOMNode(l.refs.msg).value=""});case 12:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.account,n=this.state.chats;return s.a.createElement("div",{className:"chatroom"},s.a.createElement("h3",null,"LoveDiary"),s.a.createElement("ul",{className:"chats",ref:"chats"},n.map(function(n){return s.a.createElement(I,{id:n.time,chat:n,user:t,onClick:function(t){return e.showTime(t,n)}})})),s.a.createElement("form",{className:"input",onSubmit:function(t){return e.submitMessage(t)}},s.a.createElement("input",{type:"text",ref:"msg"}),s.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(s.a.Component),A=n(477),B=n(200),W=n.n(B),P=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).setReceiver=function(e){n.setState({receiver:e.target.value})},n.state={account:"",info:{},invitations:["No friend invitation"],receiver:"",message:""},n.setReceiver=n.setReceiver.bind(Object(g.a)(Object(g.a)(n))),n.sendInvitation=n.sendInvitation.bind(Object(g.a)(Object(g.a)(n))),n.acceptInvitation=n.acceptInvitation.bind(Object(g.a)(Object(g.a)(n))),n.web3=new j.a(j.a.givenProvider||"http://localhost:8545"),n.storage=new n.web3.eth.Contract(C,M),n.logic=new n.web3.eth.Contract(N,M),n.getInfo(),n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getInfo",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t,n,a,s,i,o,c,r,l,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.web3.eth.getAccounts();case 2:return t=e.sent,this.setState({account:t[0]}),n={},e.next=7,this.logic.methods.get_user(this.state.account).call();case 7:return a=e.sent,console.log("userinfo:",a),n.nickname=this.web3.utils.hexToUtf8(a.nickname),n.sex=a.sex?"Girl":"Boy",n.status=a.status?"In love":"Single",this.setState({info:n}),e.next=15,this.logic.methods.get_invitations(this.state.account).call();case 15:s=e.sent,i=[],o=0;case 18:if(!(o<s.length)){e.next=31;break}return c=s[o],e.next=22,this.logic.methods.get_channel(c).call();case 22:return r=e.sent,e.next=25,this.logic.methods.get_user(r.user1).call();case 25:l=e.sent,u={address:r.user1,nickname:this.web3.utils.hexToUtf8(l.nickname),cid:c},i.push(u);case 28:++o,e.next=18;break;case 31:0===i.length&&(i=[{address:"0x0",nickname:"No friend invitation",cid:"0x0"}]),console.log(i),this.setState({invitations:i});case 34:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"sendInvitation",value:function(){var e=Object(f.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state),t=Math.round(Date.now()/1e3),e.next=4,this.logic.methods.register_channel(this.state.receiver,t).send({from:this.state.account});case 4:!1===e.sent.status?console.log("send invitation failed"):console.log("send invitation success");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"acceptInvitation",value:function(){var e=Object(f.a)(b.a.mark(function e(t){var n,a,s,i,o;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(console.log(t.target.innerHTML),n=t.target.innerHTML,s=0;s<this.state.invitations.length;++s)this.state.invitations[s].nickname===n&&(a=this.state.invitations[s].cid);if(console.log(a),"0x0"!==a){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,this.logic.methods.approve_channel(a).send({from:this.state.account});case 8:return i=e.sent,e.next=11,this.logic.methods.get_user(this.state.account).call();case 11:o=e.sent,console.log(o),!0===i.status?console.log("channel approve success"):console.log("channel approve failed"),this.getInfo();case 15:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"chatroom"},s.a.createElement("h3",null,"Personal Center"),s.a.createElement("ul",{className:"info"},s.a.createElement("div",{className:"line"},s.a.createElement("h3",null,"My Infomation")),s.a.createElement("div",{className:"line"},s.a.createElement(A.a,{label:this.state.info.nickname,color:"secondary",variant:"outlined"})),s.a.createElement("div",{className:"line"},s.a.createElement(k.a,{row:!0},s.a.createElement(A.a,{label:this.state.info.sex,color:"secondary",variant:"outlined"}))),s.a.createElement("div",{className:"line"},s.a.createElement(k.a,{row:!0},s.a.createElement(A.a,{label:this.state.info.status,color:"secondary",variant:"outlined"}))),s.a.createElement("div",{className:"line"},s.a.createElement("h3",null,"Received Invitations")),s.a.createElement("div",{className:"line"},this.state.invitations.map(function(t){return s.a.createElement(A.a,{label:t.nickname,color:"secondary",variant:"outlined",deleteIcon:s.a.createElement(W.a,null),onClick:e.acceptInvitation})})),s.a.createElement("div",{className:"line"},s.a.createElement("h3",null,"Send Invitation")),s.a.createElement("div",{className:"line"},s.a.createElement(O.a,{varint:"filled",label:"Receiver",color:"secondary",onChange:this.setReceiver}),s.a.createElement(x.a,{varint:"contained",color:"secondary",onClick:function(t){return e.sendInvitation()}},"Send invitation"))))}}]),t}(s.a.Component),R=n(120),U=n.n(R),H=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(S.a,{flipOnHover:!1,flipOnClick:!1,flipDirection:"horizontal",ref:function(t){return e.flippy=t}},s.a.createElement(T.FrontSide,null,s.a.createElement(P,null),s.a.createElement("div",{className:"flip"},s.a.createElement(U.a,{className:"flip",onClick:function(){return e.flippy.toggle()}}))),s.a.createElement(T.BackSide,null,s.a.createElement(D,null),s.a.createElement("div",{className:"flip"},s.a.createElement(U.a,{className:"flip",onClick:function(){return e.flippy.toggle()}}))))}}]),t}(a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(c.c,{history:c.d},s.a.createElement(c.b,{path:"/",component:y},s.a.createElement(c.a,{component:_}),s.a.createElement(c.b,{path:"register",component:_}),s.a.createElement(c.b,{path:"main",component:H}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat(".","/service-worker.js");L?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):G(e)})}}()},61:function(e,t,n){}},[[210,1,2]]]);
//# sourceMappingURL=main.effd1ab8.chunk.js.map