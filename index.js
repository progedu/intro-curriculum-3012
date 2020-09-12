'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    // 情報。普段から残しておきたい情報に使う。
    console.info(
        '[' + new Date() + '] Requested by' + req.connection.remoteAddress  //リクエストが送られたIP情報を出力
    );
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
    });
    res.write(req.headers['user-agent']);
    res.end();
})
.on('error', (e) => {
    console.error('[' + new Date() + '] Server Error', e);
})
.on('clientError', (e) => {
    console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
server.listen(port, () => {
    console.info('[' + new Date() + '] Listening on ' + port);
});
