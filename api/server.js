const express = require('express');
const helmet = require('helmet');

// setup server
const server = express();
server.use(helmet());
server.use(express.json());

// Check if api is running
server.get('/', (req, res) => {
	res.send(`<h1>API is running</h1>`)
});

module.exports = server;