'use strict';
const http = require('http');
const server = http
  .createServer((req, res) => {
    console.info(
      '[' + new Date() + '] Requested by ' + req.connection.remoteAddress
    );
    res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.write(req.headers['user-agent']);
    res.end();
  })
  .on('error', e => {
    console.error('[' + new Date() + '] Server Error', e);
  })
  .on('clientError', e => {
    console.error('[' + new Date() + '] Client Error', e);
  });

let date = new Date();
date.setTime(date.getTime() + 1000 * 60 * 60 * 9);
const port = 8000;

server.listen(port, () => {
  console.info('[' + date + ']');
  console.log('Listening on ' + port);
});
