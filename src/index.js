const express = require('express');

const server = express();

server.get('/', function(dotaz, odpoved) {
    odpoved.send("Hello Express!");
});

server.listen(8000);