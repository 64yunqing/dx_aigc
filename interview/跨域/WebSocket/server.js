const WebSocket = require('ws');
const ws = new WebSocket.Server({port:3000});
let count = 1;


ws.on('connection',(obj)=>{
   obj.on('message',(data) => {
     obj.send('this is a message from WebSocket')
     setInterval(()=>{
        count++;
        obj.send(count)
    },1000)
   })
})