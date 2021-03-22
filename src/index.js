const express = require('express');

const server = http.createServer(function(http_dotaz, http_odpoved) {
    http_odpoved.write("Hello World!");
    http_odpoved.end();
});

server.listen(8000);