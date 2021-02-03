const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const ip = require('ip');

console.log(ip.address());

const app = express();
const port = 3000;
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(express.static('public'));

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    console.log(data);
    wss.clients.forEach((client) => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(data);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`Server is listening on ${port}!`);
  console.log(`Access at: http://${ip.address()}:${port}`);
});
