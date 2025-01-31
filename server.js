const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const clients = new Map();

wss.on('connection', (ws) => {
    const id = Date.now();
    clients.set(id, ws);

    ws.on('message', (message) => {
        const data = JSON.parse(message);
        broadcastMessage(data, id);
    });

    ws.on('close', () => {
        clients.delete(id);
    });
});

function broadcastMessage(data, senderId) {
    clients.forEach((client, id) => {
        if (id !== senderId) {
            client.send(JSON.stringify(data));
        }
    });
}

app.use(express.static('public'));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
