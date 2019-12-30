'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
  console.info(`[${new Date()}] Requested by ${req.connection.remoteAddress}`); 
  // 一度に全部情報を送信するのではなく、一度ヘッダー情報を送信する　200は通信が正常である意味
  res.writeHead(200, {
    'Content-Type': 'text/plain; charset=utf-8'
  });
  res.write(req.headers['user-agent']);
  res.end();
}).on('error', (e) => {
  console.error(`[${new Date()}] Server Error`, e);
}).on('clientError', (e) => {
  console.error(`[${new Date()}] Client Error`, e);
});

const port = 8000;
server.listen(port, () => {
  console.info(`[${new Date()}] Listening on ` + port);
});