const net = require('net');
const parseRequest = require('./lib/utils/parseRequest');
const createResponse = require('./lib/utils/createResponse');
const  fs  = require('fs').promises;

const app = net.createServer(socket => {
  socket.on('data', data => {
    const { path } = parseRequest(data.toString());
    if(path){fs.readFile(`public${path}`).then((data) => socket.end(createResponse({ body: data, status: '200 Ok', contentType: 'text/plain' }))
  )}
  else
  socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
});
});

module.exports = app;
