'use strict';
const http = require('http');
const server = http.createServer((req, res) => {
    console.info('[' + new Date() + '] Requested by ' + req.connection.remoteAddress);
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
	res.write('<!DOCTYPE html><html lang="ja"><body><h1>[＼(゜ロ＼)ココはどこ？(／ロ゜)／アタシはだあれ？　こぶた？　→　たぬき？　→　きつね目？　→　メガネねこ！！］</h1></body></html>');
    res.end();
}).on('error', (e) => {
    console.error('[' + new Date() + '] Server Error', e);
}).on('clientError', (e) => {
    console.error('[' + new Date() + '] Client Error', e);
});
const port = 8000;
server.listen(port, () => {
    console.info('[' + new Date() + '] Listening on ' + port);
});
